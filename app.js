'use strict';

const inputs = document.querySelectorAll('input');

const patterns = {
    firstname: /^[a-z]{1,15}$/i,
    lastname: /^[a-z]{1,15}$/i,
    phonenumber: /^\d{10}$/,
    password: /^[\w-_@]{8,20}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
};


function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';

    } else {
        field.className = 'invalid';
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});


