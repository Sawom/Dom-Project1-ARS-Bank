document.getElementById('subButton').addEventListener('click',function(){
    // get email
    const getEmail = document.getElementById('email');
    const getEmail1 = getEmail.value;
    // get password
    const getPass = document.getElementById('password');
    const getPass1 = getPass.value
    if(getEmail1=='sawom99@gmail.com' && getPass1 == 'sawom99'){
        window.location.href = 'second.html';
    }
})