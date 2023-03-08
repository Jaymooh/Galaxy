submitButton.addEventListener("click", function () {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      window.alert("Success!, Welcome Back");
      window.location = "./createTask.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      window.alert(errorMessage);
      window.alert("Error occurred. Try Again");
    });
});

signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});