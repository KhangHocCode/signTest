const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Toggle password visibility for sign-in form
const toggleSignInPassword = document.querySelector('#toggleSignInPassword');
const signInPassword = document.querySelector('#sign-in-password');

toggleSignInPassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = signInPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  signInPassword.setAttribute('type', type);
  // toggle the eye icon
  this.classList.toggle('ri-eye-off-line');
});

// Toggle password visibility for sign-up form
const toggleSignUpPassword = document.querySelector('#toggleSignUpPassword');
const signUpPassword = document.querySelector('#sign-up-password');

toggleSignUpPassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = signUpPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  signUpPassword.setAttribute('type', type);
  // toggle the eye icon
  this.classList.toggle('ri-eye-off-line');
});