/*
  🚀 Question 20: Validate a form (email, password, etc.) using JS
   
*/
const form = document.querySelector("form");
// const nameMsg = document.querySelector(".name-msg");
// const emailMsg = document.querySelector(".email-msg");
// const passwordMsg = document.querySelector(".password-msg");
// const numberMsg = document.querySelector(".number-msg");
// const errorMsg = document.querySelectorAll("span");
const nameRegex = /^[a-zA-Z0-9._]{5,16}$/;
const numberRegex = /^[0-9]{10}$/;
console.log(form.username);
const fields = {
  username: {
    regex: /^[a-zA-Z0-9._]{5,16}$/,
    emptyMsg: "Username cannot be empty",
    invalidMsg:
      "underscore,letter,number and dot are allowed and character (5-16)",
    span: document.querySelector(".name-msg"),
  },
  useremail: {
    regex: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
    emptyMsg: "Email cannot be empty",
    invalidMsg: "Invalid email format",
    span: document.querySelector(".email-msg"),
  },
  usernumber: {
    regex: /^[0-9]{10}$/,

    emptyMsg: "Phone number cannot be empty",
    invalidMsg: "Phone number must be 10 digits",
    span: document.querySelector(".number-msg"),
  },
  userpassword: {
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
    emptyMsg: "Password cannot be empty",
    invalidMsg: "Must have 8+ chars, 1 uppercase, 1 number & 1 special symbol",
    span: document.querySelector(".password-msg"),
  },
};
function showMsg(span, msg, color = "red") {
  span.textContent = msg;
  span.style.color = color;
}
for (let key in fields) {
  const { regex, emptyMsg, invalidMsg, span } = fields[key];
  const input = form[key];
  input.addEventListener("input", () => {
    const value = input.value.trim();
    if (!value) {
      showMsg(span, emptyMsg);
    } else if (!regex.test(value)) showMsg(span, invalidMsg);
    else showMsg(span, "");
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let allValidFields = true;
  for (let key in fields) {
    const { regex, emptyMsg, invalidMsg, span } = fields[key];
    const value = e.target[key].value.trim();
    if (!value) {
      showMsg(span, emptyMsg);
      allValidFields = false;
    } else if (!regex.test(value)) {
      showMsg(span, invalidMsg);
      allValidFields = false;
    } else showMsg(span, "");
  }
  if (allValidFields) {
    alert("Form submitted successfully !");
    form.reset();
    for (let key in fields) {
      fields[key].span.textContent = "";
    }
  }
});
