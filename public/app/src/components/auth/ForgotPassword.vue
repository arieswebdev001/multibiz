<template>
  <div>
        <!-- begin:: Page -->
		<div class="m-grid m-grid--hor m-grid--root m-page">		
			<div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2" id="m_login">
				<div class="m-grid__item m-grid__item--fluid m-login__wrapper">
					<div class="m-login__container">
						<div class="m-login__logo">
							<a href="#">
							    <img src="images/app/logo.png">  	
							</a>
						</div>
						<div>
							<div class="m-login__head">
								<h3 class="m-login__title">Forgotten Password ?</h3>
								<div class="m-login__desc">Enter your email to reset your password:</div>
							</div>
							<form class="m-login__form m-form" action="">
								<div class="form-group m-form__group">
									<input class="form-control m-input" type="text" placeholder="Email" name="email" id="m_email" autocomplete="off">
								</div>
								<div class="m-login__form-action">
									<button class="btn btn-info m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primaryr">Request</button>&nbsp;&nbsp;
									<a href="#/login" class="btn btn-outline-focus m-btn m-btn--pill m-btn--custom m-login__btn">Cancel</a>
								</div>
							</form>
						</div>
					</div>	
				</div>
			</div>				
		</div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data () {
    return {}
  }
}
</script>