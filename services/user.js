// element references on the page
const wishForm = document.forms[0];
const wishMessage = document.querySelector("#wish");
const userName = document.querySelector("#username");
const curChar = document.querySelector("#cur-char");

// error message when no input/ more than 100 characters
const setError = (input, message) => {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector("small"); // select error message

  // error message
  errorMessage.innerText = message;

  // add error to the form class
  formControl.className = "form-control error";
}

// success message
const setSuccess = (input) => {
  const formControl = input.parentElement;

  // add success to the form class
  formControl.className = "form-control success";
}

// form validation 
const checkInputs = () => {
  // input values
  const wishMessageValue = wishMessage.value;
  const userNameValue = userName.value;
  const char = wishMessage.value.split("");
  const charCount = char.length; // count the character by length

  // no character input
  if (!wishMessageValue) {
    setError(wishMessage, "Please enter your message.");
    return false;
  }

  if (!userNameValue) {
    setError(userName, "Please enter your username."); // error message for inputting wrong username
    return false;
  }

  if (charCount <= 100) {
    setSuccess(wishMessage); // success message when characters are less than/ equal to 100 characters
    return true;
  }
  setError(wishMessage, "You have input more than 100 characters!"); // error message for inputting more than 100 characters
  return false;
}

// listen to the form while being submited 
wishForm.onsubmit = (event) => {
  checkInputs(); // to check user inputs

  if (!checkInputs) {
    event.preventDefault();
  }
};

// listen to the textarea of wish form for character counting
wishMessage.addEventListener("keyup", () => {
  const char = wishMessage.value.split("");
  const charCount = char.length; // count the character by length
  current.innerText = charCount; // update the character count

  const maxCharLength = wishForm.maxLength; // max character length for wish form
  const colorChange = .8 * maxCharLength; // color indicator when the character length reaches 80%

  // conditions when textarea occupied by characters up to certain %
  if (charCount > colorChange && charCount < maxCharLength) {
    current.style.color = "orange"; // change to orange
  } else if (charCount >= maxCharLength) {
    current.style.color = "red"; // change to red
  } else {
    current.style.color = "black";
  }
});
