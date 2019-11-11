// elements to export to the test file
module.exports = {
    passwordIsValid,
    passwordIsOk
}

// my regex patterns
ptn1 = /[a-z]/;
ptn2 = /[A-Z]/;
ptn3 = /[^a-zA-Z0-9]/;
ptn4 = /[0-9]/;

// function to validate if password meet cirtain requirements
function passwordIsValid(password){
    
    try {
        // validate the existance
        if (password.toString() == "") {
            throw "password should exist"
        }
        // validate length
        else if (password.toString().length < 9){
            throw "password should be longer than than 8 characters"
        }
        // validate for lower-case character
        else if (!password.toString().match(ptn1)){
            throw "password should have at least one lowercase letter"
        }
        // validate for upper-case character
        else if (!password.toString().match(ptn2)){
            throw "password should have at least one uppercase letter"
        }
        // validate for special character
        else if (!password.toString().match(ptn3)){
            throw "password should have at least one special character"
        }
        // validate for digits
        else if (!password.toString().match(ptn4)) {
            throw "password should have at least one digit"
        }
        // for when minimum requirements are met
        else{
        return password;
        }
    } 
    // for when minimum requirements are not met
    catch (err) {
        return err;
    }
} 

// function that returns true if password is okay and false if password is not okay
function passwordIsOk(password){
    if (((password.toString() !== "") && (password.toString().length >= 9)) && ((!password.toString().match(ptn1) || !password.toString().match(ptn2) || !password.toString().match(ptn3) || !password.toString().match(ptn4)))){
        return true;
    }
    else{
        return false;
    }
}
