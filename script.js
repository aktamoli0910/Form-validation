$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#emailverification').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var Error = true;  //no error
    var email_error = true;
    var password_error = true;
    var confirm_password_error = true;      //at the end all of them should be true

    $('#username').keyup(function(){
        username_validation();
    });

    function username_validation(){
        var username_val = $('#username').val();
        if(username_val.length==''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username cannot be empty');
            $('#usernamevalidation').css('color','red');
            Error = false;
            return false;
        }
        else if(username_val.length<4  || username_val.length>20){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should be of atleast 4 characters');
            $('#usernamevalidation').css('color','red');
            Error = false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
            Error = true;
        }
    }

    $('#email').keyup(function(){
        email_validation();
    });

    function email_validation(){
        var email_val=$('#email').val();
        if(email_val.length==''){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email cannot be empty');
            $('#emailvalidation').css('color','red');
    
            email_error=false;
            return false;
        }
        var email1=/^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if(!email1.test(email_val)){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Enter email in correct format');
            $('#emailvalidation').css('color','red');
    
            email_error=false;
            return false;
        }
        else{
            $('#emailvalidation').hide();
            email_error=true;
        }
    }

    $('#password').keyup(function(){
        password_validation();
    });

    function password_validation(){
        var password_val = $('#password').val();
        if(password_val.length==''){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password cannot be empty');
            $('#passwordvalidation').css('color','red');
            password_error = false;
            return false;
        }
        var password1 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(!password1.test(password_val)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Please type password in correct format');
            $('#passwordvalidation').css('color','red');
            password_error = false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
            password_error = true;
        }
    }

    $('#confirmpassword').keyup(function(){
        confirm_password();
    });

    function confirm_password(){
        var confirm_password_val = $('#confirmpassword').val();
        var password_val = $('#password').val();
        if(confirm_password_val.length==''){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('This field cannot be empty');
            $('#confirmpasswordvalidation').css('color','red');
    
            confirm_password_error=false;
            return false;
        }
        if(password_val!=confirm_password_val){
            $('confirmpasswordvalidation').show();
            $('confirmpasswordvalidation').html('Password did not match');
            $('confirmpasswordvalidation').css('color','red');
            confirm_password_error = false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
            confirm_password_error = true;
        }
    }

    $('#submitvalidation').click(function(){        //form should be submitted only when all these values are true
        username_validation();
        email_validation();
        password_validation();
        confirm_password();

        if(Error==true && email_error && password_error==true && confirm_password_error==true)
            return true;
        else
            return false;
    });

});