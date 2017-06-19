        //用户名：
        var  usernameRegex = /^\w{3,15}$/;
        //密码：
        var passwordRegex = /^\w{6,12}$/;
        //邮箱：
        var emailRegex = /^\w+@\w+(\.\w+)+$/;

        function validateForm(){
            //校验用户名
            if(!checkUsername()){
                return false;
            }

            //校验密码
            if(!checkPassword()){
                return false;
            }

            //确认密码
            if(!checkRePassword()){
                return false;
            }

            //校验邮箱
            if(!checkEmail()){
                return false;
            }
            return true;
        }

        function checkUsername(){
            var username = document.getElementById("username").value;
            if(!usernameRegex.test(username)){
                document.getElementById("username_span").style.color = "red";
                return false;
            }else{
                document.getElementById("username_span").style.color = "green";
                return true;
            }
        }

        function checkPassword(){
            var password = document.getElementById("password").value;
            if (!passwordRegex.test(password)) {
                document.getElementById("password_span").style.color = "red";
               return false;
            }
            else {
                document.getElementById("password_span").style.color = "green";
              return true;
            }
        }

        function checkRePassword(){
            var confirmPassword = document.getElementById("rePassword").value;
            var password = document.getElementById("password").value;
            if(!password==confirmPassword){
                document.getElementById("rePassword_span").style.color = "red";
                return false;
            }else{
                document.getElementById("rePassword_span").style.color = "green";
                return true;
            }
        }

        function checkEmail(){
            var email = document.getElementById("Email").value;
            if(!emailRegex.test(email)){
                document.getElementById("Email_span").style.color = "red";
                return false;
            }else{
                document.getElementById("Email_span").style.color = "green";
                return true;
            }
        }
