const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    alert("Thank You \nYour form has been submitted");
  }
});

function setError(id, message) {
  const ele = document.getElementById(id);
  ele.innerText = message;
}

function clearError(id) {
  const ele = document.getElementById(id);
  ele.innerText = "";
}

function validateFirstName() {
  const name = document.getElementById("FirstName");

  const idValue = name.value.trim();

  const parent = name.parentElement;

  const errorId = "fnameError";

  if (idValue.length === 0) {
    setError(errorId, "*Firstname can't be empty");
    parent.className = "form-element text-field-error";
    return false;
  }

  if (idValue.indexOf(" ") >= 0) {
    setError(errorId, "*Firstname can't have white spaces");
    parent.className = "form-element text-field-error";
    return false;
  }

  parent.className = "form-element text-field";
  clearError(errorId);
  return true;
}

function validateLastName() {
  const name = document.getElementById("LastName");

  const idValue = name.value.trim();

  const parent = name.parentElement;

  const errorId = "lnameError";

  if (idValue.length === 0) {
    setError(errorId, "*Lastname can't be empty");
    parent.className = "form-element text-field-error";
    return false;
  }

  if (idValue.indexOf(" ") >= 0) {
    setError(errorId, "*Lastname can't have white spaces");
    parent.className = "form-element text-field-error";
    return false;
  }

  parent.className = "form-element text-field";
  clearError(errorId);
  return true;
}

function validateTnC() {
  const checkBox = document.getElementById("TnC");

  const errorId = "TncError";

  if (!checkBox.checked) {
    setError(errorId, "*Accept the Terms and Conditions first");
    parent.className = "form-element text-field-error";
    return false;
  }

  parent.className = "form-element text-field";
  clearError(errorId);
  return true;
}

function validateStatus() {
  const status = document.getElementsByName("MaritialStatus");

  const errorId = "StatusError";

  if (!status[0].checked && !status[1].checked) {
    setError(errorId, "*Please select your maritial status");
    parent.className = "form-element text-field-error";
    return false;
  }

  parent.className = "form-element text-field";
  clearError(errorId);
  return true;
}

function validateGender() {
  const gender = document.getElementsByName("Gender");

  const errorId = "GenderError";

  if (!gender[0].checked && !gender[1].checked) {
    setError(errorId, "*Please select your gender");
    parent.className = "form-element text-field-error";
    return false;
  }

  parent.className = "form-element text-field";
  clearError(errorId);
  return true;
}

function validateSpouseName() {
  const married = document.getElementById("Married");

  const errorId = "SpouseError";

  const name = document.getElementById("Spouse");

  const idValue = name.value.trim();

  const parent = name.parentElement;

  if (married.checked) {
    if (idValue.length === 0) {
      setError(errorId, "*Spouse name can't be empty");
      parent.className = "form-element text-field-error";
      return false;
    }

    if (idValue.indexOf(" ") >= 0) {
      setError(errorId, "*Spouse name can't have white spaces");
      parent.className = "form-element text-field-error";
      return false;
    }
  }

  parent.className = "form-element text-field";
  clearError(errorId);
  return true;
}

function validate() {
  var isValid = true;

  if (!validateFirstName()) {
    isValid = false;
  }

  if (!validateLastName()) {
    isValid = false;
  }

  if (!validateGender()) {
    isValid = false;
  }

  if (!validateStatus()) {
    isValid = false;
  }

  if (!validateSpouseName()) {
    isValid = false;
  }
  if (!validateTnC()) {
    isValid = false;
  }

  return isValid;
}

const married = document.getElementById("Married");

married.addEventListener("click", (ev) => {
  const spouse = document.getElementById("spouse-div");

  spouse.style.display = "block";
});

const unmarried = document.getElementById("Unmarried");

unmarried.addEventListener("click", (ev) => {
  const spouse = document.getElementById("spouse-div");

  spouse.style.display = "none";
});
