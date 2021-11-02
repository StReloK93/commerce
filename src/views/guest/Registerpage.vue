<template>
<section class="flex flex-col h-full bg-gray-300">
	<main class="flex-grow flex items-center justify-center">
		<form class="form-width shadow-2xl flex" v-on:submit.prevent="register">
			<section class="w-1/2 registerback relative">
			<transition name="fade">
				<RegisterFormShop v-if="formdata.shop" :formdata="formdata.shopdata"/>
			</transition>
			</section>
			<section class="p-8 w-1/2 bg-white ">
				<h3 class="text-gray-900 text-2xl text-center mb-4">Ro'yhatdan o'tish</h3>
				<div>
					<label for="name" class="ml-1 text-gray-400 text-xs">F.I.O</label>
					<input id="name" type="text" required v-model="formdata.name" class="w-full p-1 border-b border-gray-400 bg-transparent focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"/>
				</div>
				<div>
					<label for="shopType" class="ml-1 text-gray-400 text-xs">Shaxar</label>
					<select required v-model="formdata.city" id="shopType" class="w-full pb-1 border-b border-gray-400 bg-transparent focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
						<option value disabled selected>Shaharni tanlang</option>
						<option value="1">Uchquduq</option>
						<option value="2">Zarafshon</option>
					</select>
				</div>
				<div>
					<label for="email" class="ml-1 text-gray-400 text-xs">Email</label>
					<input id="email" type="email" required v-model="formdata.email" class="w-full p-1 border-b border-gray-400 bg-transparent focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
				</div>
				<div>
					<label for="password" class="ml-1 text-gray-400 text-xs">Parol</label>
					<input id="password" type="password" autocomplete="off" required v-model="formdata.password" class="w-full p-1 border-b border-gray-400 bg-transparent focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
				</div>
				<div>
					<label for="password_confirmation" class="ml-1 text-gray-400 text-xs">Parolni qaytadan yozing</label>
					<input id="password_confirmation" autocomplete="off" type="password" required v-model="formdata.password_confirmation" class="w-full p-1 border-b border-gray-400 bg-transparent focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
				</div>
				<div>
					<label class="inline-flex items-center mt-3">
						<input type="checkbox" v-model="formdata.shop" class="form-checkbox h-4 w-4 text-teal-600"><span class="ml-2 text-xs text-gray-400">Biznes account  (Kafe yoki do'kon bo'lsangiz)</span>
					</label>
				</div>
				<div class="mb-4 text-xs mt-2">
					<router-link to="/login" class="hover:text-blue-500 text-blue-400">Ro'yhatdan o'tganmisiz?</router-link>
				</div>
				<div class="flex text-sm justify-end">
					<button type="submit" class="bg-gray-600 hover:bg-gray-400 transition duration-150 shadow-xl w-1/2 text-white p-2" >Ro'yhatdan o'tish</button>
				</div>
			</section>
		</form>
	</main>
</section>
</template>
<script>
import RegisterFormShop from '@/components/RegisterFormShop'
export default {
	components:{
		RegisterFormShop
	},
	data() {
		return {
			formdata: {
				email: "",
				password: "",
				password_confirmation: "",
				name: "",
				shop: false,
				city: "",
				shopdata: {
					description: "",
					type: "",
					name: "",
					fileimg: null,
					imgdefsrc: "/src/pizza.jpg",
				}
			},
		};
	},
	methods: {
		register() {
			if (this.formdata.email.trim().length > 1 && this.formdata.password.trim().length > 1) {
				const endData = new FormData()
				for (const parentkey in this.formdata) {
					if(typeof this.formdata[parentkey] == 'object')
						for (const key in this.formdata[parentkey]) {
							endData.append(`${parentkey}[${key}]`, this.formdata[parentkey][key])
						}
					else endData.append(parentkey, this.formdata[parentkey])
				}
				this.$store.dispatch("register", endData).then((bool) => {
					if(bool) this.$router.push({ path: "/" });
				});
			}
		},
	},
};
</script>
<style scoped>
.registerback{
    background: url('/src/registerback.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}
.shop{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgb(255 255 255 / 90%);
}
</style>>