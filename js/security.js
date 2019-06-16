function check(form){
    if(form.user.value == "admin" && form.pass.value == "admin123"){
        window.open('../client/index.html');
    }
    else{
        alert('Chybně zadané heslo.');
    }
}