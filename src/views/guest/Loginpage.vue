<template>
	<section class="flex flex-col h-full bg-gray-300">
		<main class="flex-grow flex items-center justify-center">
			<form class="form-width shadow-2xl flex" v-on:submit.prevent="login">
				<section class="w-1/2 loginback"></section>
				<section class="p-8 w-1/2 bg-white">
					<h3 class="text-gray-900 text-2xl text-center">Accountga kirish</h3>
					<p class="text-xs text-center text-gray-300 my-4">Agar ro'yhatdan o'tmagan bo'lsangiz avval <router-link class="underline" to="/register">ro'yhatdan o'ting!</router-link></p>
					<div>
						<label for="email" class="text-gray-400 text-xs">Email</label>
						<input id="email" type="email" v-model="email" required class="w-full flex-1 py-1 border-b border-gray-200 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"/>
					</div>
					<div>
						<label for="password" class="text-gray-400 text-xs">Parol</label>
						<input id="password" type="password" minlength="6" v-model="password" autocomplete="off" required class="w-full flex-1 py-1 border-b border-gray-200 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"/>
					</div>
					<div class="text-right mb-4 text-xs mt-2">
						<router-link to="#" class="hover:text-blue-500 text-blue-400">Parolni unutdingizmi?</router-link>
					</div>
					<div class="flex text-sm justify-between">
						<button type="submit" class="bg-red-600 hover:bg-red-400 transition duration-150 shadow-xl w-5/12 text-white p-2">Kirish</button>
						<router-link to="/register" class="bg-gray-600 text-center hover:bg-gray-400 transition duration-150 shadow-xl w-1/2 text-white p-2">Ro'yhatdan o'tish</router-link>
					</div>
				</section>
			</form>
		</main>
	</section>
</template>
<script>
export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		login() {
			if (this.email.trim().length > 1 && this.password.trim().length > 1) {
				this.$store.dispatch("login", {
					email: this.email,
					password: this.password,
				}).then((user)=>{
					if(user.role == 0) this.$router.push({ path: "/" })
					else if(user.role == 1) this.$router.push({ path: "/shop" })
					else if(user.role == 2) this.$router.push({ path: "/admin" })
					else this.password = ""
				})

			}
		},
	},
};
</script>
<style scoped>
.loginback{
	background: url('/src/loginback.jpg') no-repeat;
	background-size: cover;
	background-position: center;
}
</style>