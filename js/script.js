const bred = document.querySelector('#bred');
const royal = document.querySelector('#royal');
const shadow = document.querySelector('#shadow');
const wolf = document.querySelector('#wolf');
const image = document.querySelector('#product img');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const address = document.querySelector('#addressField');
const address2 = document.querySelector('#addressField2');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const zip = document.querySelector('#zipField');
const country = document.querySelector('.country');
const submit = document.querySelector('.complete');
const input = document.querySelectorAll('#shipping input');
const error = document.querySelectorAll('.error');
const fieldset = document.querySelector('fieldset');
const shipName = document.querySelector('#shipName');
const shipAddress = document.querySelector('#shipAddress');
const shipAddress2 = document.querySelector('#shipAddress2');


class Validate {
  constructor(input, type) {
    this.input = input;
    this.type = type;
    this.errors = [];
  }

  addError(message) {
    this.errors.push(message);
  }

  getMessages() {
    const status = this.input.validity;

    if(status.typeMismatch) {
      this.addError(`Entry doesn't match field type`)
    }

    if(status.tooShort) {
      this.addError(`Entry is too short`)
    }

    if(status.tooLong) {
      this.addError(`Entry is too long`)
    }

    if(!this.input.value.match(/[A-Z]/g)) {
      this.addError('Must contain an uppercase letter')
    }

    return this.errors;
  }
}


submit.addEventListener('click', (event) => {
  event.preventDefault();

  let validateName = new Validate(fullName, "Griffin");
  const nameError = validateName.getMessages();
  let errorMessages = [nameError];

  console.log(errorMessages);
  if(errorMessages.length > 0) {
    errorMessages.forEach((err) => {
      fieldset.insertAdjacentHTML('afterend', `<div class="eContainer"><p class="error">${err}</p></div>`)
    })
  }
  else {
    alert('Form Submitted');
  }
})



fullName.addEventListener('keyup', (event) => {
  shipName.innerHTML = fullName.value;
});

address.addEventListener('keyup', (event) => {
  shipAddress.innerHTML = address.value;
});

cityField.addEventListener('keyup', (event) => {
  shipAddress2.innerHTML = cityField.value;
});

stateField.addEventListener('focusout', (event) => {
  shipAddress2.innerHTML += ", " + stateField.value;
});

zipField.addEventListener('focusout', (event) => {
  shipAddress2.innerHTML += " " + zipField.value;
});




fullName.addEventListener('keyup', (e) => {
  e.preventDefault();

  const value = fullName.value;

  if(value.length > 2 || value.length == 0) {
    console.log('good', value.length);
    fullName.classList.remove('invalid');
  }
  else {
    console.log('bad', value.length);
    fullName.classList.add('invalid');

  }
})



zip.addEventListener('keyup', (e) => {
  e.preventDefault();

  const isValidZip = `/(^\d{5}$)|(^\d{5}-\d{4}$)/`;

  if(!zip || !zip.value) {
    return false;
  }
  else {
    return ((zip.value.match(isValidZip)));
  }
})



function zipCode(zip) {
  if(!zip || !zip.value) {
    return false;
  }
  else {
    return ((zip.value.match(isValidZip)));
  }
}


const isValidZip = `/(^\d{5}$)|(^\d{5}-\d{4}$)/`;



royal.addEventListener('click', changeImg);

function changeImg(img) {
  image.src = img;
}
