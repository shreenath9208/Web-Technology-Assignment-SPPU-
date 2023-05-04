function Validation() {

    let email = document.form.em.value;
    let number = document.form.num.value;
    let pass1  = document.form.pass.value;


    let pos1 = email.indexOf("@");
    let pos2 = email.lastIndexOf(".");
    if (pos1 < 1 || (pos2 - pos1 < 6)) {
        alert("Envalid Email address")
        document.form.em.focus();
        return false;
    }
    else if (isNaN(number)) {
        // document.getElementById("ph");
        alert("Please enter numeric only.")
        return false;
    }
    else if (number.length < 10) {
        alert("The number should be atleast 10 digit ")
        document.form.num.focus();
        return false;
    }
    else if (pass1==""){
        alert("please Enter the password")
        return false;
    }
    else if (pass1.length < 8 ){
        alert("The password atleast 8 digit")
        document.form.pass.focus();
        return false;

    }
    else if (pass1.length>15){
        alert("the password maximum length of 15")
        document.form.pass.focus();
        return false;
    }
    else {
        return true;
    }


};







   