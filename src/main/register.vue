<template>
    <div>
        <p>登录</p>
				用户名：<input type="text" v-model="email"><br>
                验证码：<input type="text" v-model="ValidateCode">
                <button @click = "sendEmail()">获取验证码</button><br>
				密码: <br><input type="password" v-model="password"><br>
                确认密码：<input type="password" v-model="apassword">
                <button  @click="check()">注册</button>
   </div>
</template>

<script>
    import axios from 'axios'
	export default{
		data() {
             return {
			   email:"",
               password:"",
               apassword:"",
               ValidateCode:""
             }
		},
		methods:{
            sendEmail() {
              this.url =
                "http://stardustleague.cn:21501/api/Login/getValidateCode?eMail=" +
                this.email;
              alert(this.url);
              axios
                .get(this.url)
                .then(function(response) {
                  console.log(response);
                })
                .catch(function(error) {
                  console.log(error);
                });
            },

            //检查确认密码
            check(){
                if(this.apassword === this.password){
                    let date = {
                        "eMail": this.email,
                        "passWord": this.password,
                        "ValidateCode": Number(this.ValidateCode)
                        }
                    axios
                    .post("http://stardustleague.cn:21501/api/Login/emailEnroll", {
                        "eMail": this.email,
                        "passWord": this.password,
                        "ValidateCode":Number(this.ValidateCode)
                        }
                    )
                    .then(function(response) {
                        alert(response);
                    })
                    .catch(function(error) {
                        console.log(error.Message)
                    });

                }else{
                    alert("两次密码不一样");
                    this.$router.go(0);
                }
            }
        },

	}
</script>

<style lang="" scoped>
    
</style>