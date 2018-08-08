<template>
  <div>
    <img src="images/app/logo.png" />  	
		<h3>Sign In To Your Account</h3>
		<form action="" @submit.prevent="null">
			<div class="form-group">
				<input class="form-control" type="email" v-model="user.email" placeholder="Email" name="email" autocomplete="off">
			</div>
			<div class="form-group">
				<input class="form-control" v-model="user.password" type="password" placeholder="Password" name="password">
			</div>
			<div>
				<div>
					<a href="#/forgot-password">Forget Password ?</a>
					<br/>
				</div>
			</div>
			<div>
				<button class="btn btn-success"
				@click="login($event)">Sign In</button>
			</div>
		</form>	
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
			user:{
				email:'',
				password:''
			}
		}
	},
	mounted(){
		if(this.current_user !== null)
			this.redirectToHome();
	},
	methods:{
		login(event){
			let u = this;
			this.spinButton(event.target);
			this.$http.post('../../api/login', this.user)
				.then((response) => {
					window.localStorage.setItem("token", response.data.access_token);
					u.redirectToHome();
					window.location.reload();
				}).catch(function (error) {
					console.log(error);
				})
				.then(function () {
					u.stopButton(event.target)
				});
		}
	},
	computed:{
		current_user(){
			return this.$store.state.user;
		}
	}
}
</script>