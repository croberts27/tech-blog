const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector("#username-login");
  const passwordLogin = document.querySelector("#password-login");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: userName.value,
      password: passwordLogin.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Login error!.");
  }
};

document
  .querySelector("#login-form")
  .addEventListener("#submit", loginFormHandler);
