let email = 'belmirokunga@*****.com';

email = 'belmirokunga@######.com';

console.log(email);
console.log('Your email is: ' + email);
console.log(`Your email is: ${email}`);


document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('The button was clicked!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('The mouse is on the form.');

});

document.querySelector('#form-login').addEventListener('mouseleave', e=> {

    console.log('The mouse is outside the form.');

});

document.querySelector('#form-login').addEventListener('submit', e=>{

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    };

    if (!json.email) {

        console.error("The e-mail field must be filled in!");

    } else if (!json.password) {

        console.error("The password field must be filled in!");

    } else {

        console.info("Data validated successfully!");

    }

});



















