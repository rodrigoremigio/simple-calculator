function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
    
}

function clean() {
    document.form.textview.value = ""; 
}

function backspace() {
    var back = document.form.textview.value;
    document.form.textview.value = back.substring(0,back.length-1);
}