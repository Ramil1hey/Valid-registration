const input = document.querySelector('input');
const email = document.querySelector('#email');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const submit = document.querySelector('#btn');

function checkInputs() {
    function checkName(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const rez = /[a-zA-Z{4, 6}]\d{2,4}\w{1,4}$/;
        if (rez.test(input.value.trim())) {
            if (input.value.length < 3 || input.value.length > 18) {
                input.style.border = '2px solid red'; 
                document.querySelector('.errorName').style.visibility = 'visible';
            }
            else {
                input.style.border = '2px solid #2ecc71';
                document.querySelector('.errorName').style.visibility = 'hidden';
            }
        } else {
            document.querySelector('.errorName').style.visibility = 'visible';
            input.style.border = '1px solid red';
            document.querySelector('.errorName').innerHTML = 'forbidden symbols - !,@,#,$,%,^,&,*,(),|,/ and only EN';
        } 
    }checkName(input);

    function checkEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email.value.trim())) {
            email.style.border = '2px solid #2ecc71';
            document.querySelector('.errorEmail').style.visibility = 'hidden';
        }
        else {
            document.querySelector('.errorEmail').style.visibility = 'visible';
        }
    }checkEmail(email);

    function checkPassword(password1, password2, errorText) {
        const re = /[a-zA-Z{8, 12}]\d{1,5}/;
        if (re.test(password1.value.trim())) {
            document.querySelector('.errorPassword2').style.visibility = 'hidden';
            if (password1.value === password2.value) {
                document.querySelector('.errorPassword2').style.visibility = 'hidden';
                if (password1.value.length != 0 && password2.value.length != 0) {
                    password1.style.border = '2px solid #2ecc71';
                    password2.style.border = '2px solid #2ecc71';
                    document.querySelector('.errorPassword2').style.visibility = 'hidden';
                }else {
                    document.querySelector('.errorPassword2').style.visibility = 'visible';
                password1.style.border = '1px solid red';
                document.querySelector('.errorPassword2').innerHTML = 'empty';
                }
            }
            else {
                document.querySelector('.errorPassword2').style.visibility = 'visible';
                password1.style.border = '1px solid red';
            }
        }
        else {
            document.querySelector('.errorPassword1').style.visibility = 'visible';
            document.querySelector('.errorPassword1').innerHTML = errorText;
            password1.style.border = '1px solid red';
        }

        
    }checkPassword(password1, password2, 'at least 8 letters and from 1 to 5 numbers');
}

submit.addEventListener('click', checkInputs);