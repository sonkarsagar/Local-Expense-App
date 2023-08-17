const email = document.getElementById("femail");
const cancel = document.getElementById("cancel");
const search = document.getElementById("search");

cancel.addEventListener("click", (e) => {
  location.replace("http://localhost:3000/logIn/login.html");
});

search.addEventListener("click", async (e) => {
//   e.preventDefault();
  axios
    .post("http://localhost:3000/password/forgotpassword", {
      email: email.value,
    })
    .then((result) => {
      if (result.data=='OK') {
        alert("Change Password via the link sent to the mail");
      } else {
        alert("User doesn't exist. Please sign up");
      }
    })
    .catch((err) => {
        console.log(err);
    });
});

window.addEventListener("DOMContentLoaded", (e) => {});
