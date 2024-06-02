const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("Navbar");

if (bar) {
    bar.addEventListener("click", ()=> {
        nav.classList.add("active");
    })
}

if (close) {
    close .addEventListener("click", ()=> {
        nav.classList.remove("active");
    })
}




function nameInput() {
    var name = document.getElementById('name').value;
    var nameError = document.getElementById('nameError')
    if (name == '') {
        nameError.innerHTML = 'Name is required.';
        return false;
    } else if (name.length < 3) {
        nameError.innerHTML = 'Minimum 3 characters are required.';
        return false;
    } else {
        nameError.innerHTML = '';
        return true;
    }
}
document.getElementById('name').addEventListener('keyup', nameInput);
document.getElementById('name').addEventListener('blur', nameInput)


function emailInput() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');
    if (email == '') {
        emailError.innerHTML = "Email is required.";
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.innerHTML = "Minimum 3 characters are required.";
        return false;

    } else {
        emailError.innerHTML = "";
        return true;
    }
}
document.getElementById('email').addEventListener('keyup', emailInput)
document.getElementById('email').addEventListener('blur', emailInput)


function subjectInput() {
    var select = document.getElementById('subject').value.trim();
    console.log(select)
    var subError = document.getElementById('subError');
    if (select == '') {
        subError.innerHTML = 'subject is required.';
        return false;
    } else {
        subError.innerHTML = '';
        return true;
    }
}
document.getElementById('subject').addEventListener('change', subjectInput)
document.getElementById('subject').addEventListener('blur', subjectInput)


function textareaInput() {
    var select = document.getElementById('textarea').innerText;
    console.log(select);
    var textError = document.getElementById('textError');
    if (select == '') {
        textError.innerHTML = 'Massage is required.';
        return false;
    } else {
        textError.innerHTML = '';
        return true;
    }
}
document.getElementById('textarea').addEventListener('change', textareaInput)
document.getElementById('textarea').addEventListener('blur', textareaInput)


document.getElementById('form_submit').addEventListener('click', function(e) {
    e.preventDefault();
    var form = document.getElementById('formValidate');
    var nameV = nameInput();
    var emailV = emailInput();
    var selectV = subjectInput();
    var textareaV = textareaInput();

    var check = nameV || selectV || emailV|| textareaV;

    if (!check) {
        console.log('Pleae fill the form.')
        return;
    };
    form.reset();
    console.log('form submit succesfully.');

});




