const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const usersFile = path.join(__dirname, "data", "users.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "dishcovery-dev-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

app.use(express.static(__dirname));

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function validatePassword(password) {
  const rules = [
    {
      test: password.length >= 8,
      message: "Password must be at least 8 characters long."
    },
    {
      test: /[A-Z]/.test(password),
      message: "Password must include at least one uppercase letter."
    },
    {
      test: /[a-z]/.test(password),
      message: "Password must include at least one lowercase letter."
    },
    {
      test: /\d/.test(password),
      message: "Password must include at least one number."
    }
  ];

  return rules.filter((rule) => !rule.test).map((rule) => rule.message);
}

async function readUsers() {
  try {
    const content = await fs.readFile(usersFile, "utf8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function writeUsers(users) {
  await fs.mkdir(path.dirname(usersFile), { recursive: true });
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2));
}

function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/register");
  }

  next();
}

function redirectIfAuthenticated(req, res, next) {
  if (req.session.user) {
    return res.redirect("/dashboard");
  }

  next();
}

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/login", redirectIfAuthenticated, (_req, res) => {
  res.redirect("/register");
});

app.get("/register", redirectIfAuthenticated, (_req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

app.get("/dashboard", requireAuth, (_req, res) => {
  res.sendFile(path.join(__dirname, "dashboard.html"));
});

app.get("/api/session", (req, res) => {
  if (!req.session.user) {
    return res.json({ authenticated: false });
  }

  res.json({
    authenticated: true,
    user: req.session.user
  });
});

app.post("/api/register", async (req, res) => {
  const name = String(req.body.name || "").trim();
  const email = normalizeEmail(req.body.email);
  const password = String(req.body.password || "");

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Name, email, and password are required."
    });
  }

  const passwordErrors = validatePassword(password);

  if (passwordErrors.length > 0) {
    return res.status(400).json({
      message: passwordErrors[0],
      passwordErrors
    });
  }

  const users = await readUsers();
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(409).json({
      message: "An account with that email already exists."
    });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    id: Date.now().toString(),
    name,
    email,
    passwordHash,
    createdAt: new Date().toISOString()
  };

  users.push(user);
  await writeUsers(users);

  req.session.user = {
    id: user.id,
    name: user.name,
    email: user.email
  };

  res.status(201).json({
    message: "Registration successful.",
    redirectTo: "/dashboard"
  });
});

app.post("/api/login", async (req, res) => {
  const email = normalizeEmail(req.body.email);
  const password = String(req.body.password || "");

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required."
    });
  }

  const users = await readUsers();
  const user = users.find((entry) => entry.email === email);

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password."
    });
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid email or password."
    });
  }

  req.session.user = {
    id: user.id,
    name: user.name,
    email: user.email
  };

  res.json({
    message: "Login successful.",
    redirectTo: "/dashboard"
  });
});

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({
      message: "Logged out successfully.",
      redirectTo: "/register"
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
