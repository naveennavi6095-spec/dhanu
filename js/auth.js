const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const logoutButton = document.getElementById("logoutButton");

function showMessage(element, message) {
  if (!element) {
    return;
  }

  element.textContent = message;
  element.classList.remove("hidden");
}

function hideMessage(element) {
  if (!element) {
    return;
  }

  element.textContent = "";
  element.classList.add("hidden");
}

async function submitForm(url, form, errorElement) {
  hideMessage(errorElement);

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    showMessage(errorElement, data.message || "Something went wrong.");
    return;
  }

  window.location.href = data.redirectTo || "/dashboard";
}

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const errorElement = document.getElementById("loginError");
    await submitForm("/api/login", loginForm, errorElement);
  });
}

if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const errorElement = document.getElementById("registerError");
    await submitForm("/api/register", registerForm, errorElement);
  });
}

async function loadDashboardSession() {
  const title = document.getElementById("dashboardTitle");
  const subtitle = document.getElementById("dashboardSubtitle");
  const accountName = document.getElementById("accountName");
  const accountEmail = document.getElementById("accountEmail");

  if (!title || !subtitle || !accountName || !accountEmail) {
    return;
  }

  const response = await fetch("/api/session");
  const data = await response.json();

  if (!data.authenticated) {
    window.location.href = "/register";
    return;
  }

  title.textContent = `Welcome back, ${data.user.name}.`;
  subtitle.textContent = `You are signed in as ${data.user.email} and can access this protected dashboard.`;
  accountName.textContent = data.user.name;
  accountEmail.textContent = data.user.email;
}

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    const response = await fetch("/api/logout", {
      method: "POST"
    });
    const data = await response.json();
    window.location.href = data.redirectTo || "/register";
  });
}

loadDashboardSession();
