<template>
	<div id="container">
		<div class="header">
			<p>喵喵喵</p>
		</div>
		<div class="main">
			<div class="login">
				<router-link to="/register">注册</router-link>
				<router-link to="/login">登录</router-link>
				<router-view></router-view>
			</div>
		</div>
		<div class="buttom">

		</div>
	</div>
</template>

<script>
	
</script>


<style scoped>
	#container{
	}
	#container .header{
		height: 50px;
		background-color: #eeeeee;
	}
	p{
		text-align: center;
		font-size: 25px;
		color: violet;
	}
	.main{
		height: 600px;
		background-color: burlywood;
	}
	.buttom{
		height: 75px;
		background-color:darkslategray;
	}
	.main .login{
		width: 200px;
		height: 400px;
		margin-top: 20px;
		margin-left: 50px;
		padding-left: 10px;
		background-color: #D8BFD8;
		/*float: left;*/
	}
	input{
		height: 25px;
		border: #D8BFD8;
	}
</style>