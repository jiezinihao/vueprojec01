<template>
        <!-- <form class="form-horizontal">
            <div class="form-group">
                <label for="inputEmail" class="col-sm-2 control-label">
                    Email
                </label>
                <div class="con-sm-10">
                    <input type="text" id="inputEmail" placeholder="Email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="col-sm-2 control-label">
                    Password
                </label>
                <div class="con-sm-10">
                    <input type="password" id="inputPasswrod" placeholder="password">
                </div> -->
                <form >
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" @click="login()">Sign in</button>
                    </div>
                </div>
                </form>
</template>

<script>
    import axios from 'axios'
    export default{
		data() {
             return {
			   email:"",
               password:""
             }
        },
        methods:{
            login(){
                let date = {};
                alert(this.email),
                axios.post('http://stardustleague.cn:21501/api/Login/emailLogin',{
                    "user": this.email,
                    "passWord": this.password
                }) 
                .then(function (response) {
                    console.log(response);
                    date = response;
                })
                .catch(function (error) {
                    console.log(error.StatusCode);

                    date = error;
                });
                // console.log(date.Result.userName);
                window.location.href='../main.html'; 
            }
        }
}
</script>

<style lang="" scoped>
    
</style>