<template>
	<main class="shop p-8 border-r border-gray-100">
		<input id="fileinp" type="file" class="opacity-0 absolute" required accept="image/*" ref="fileInput" @input="onChange"/>
		<div class="-m-8 mb-3">
			<transition name="imgfade">
				<label for="fileinp" class="relative block" v-show="imgview">
					<!-- image -->
					<img :src="data.imgdefsrc" ref="imgpreview" class="preloadImage" />
					<span
						v-if="data.fileimg"
						class="material-icons absolute top-0 right-0 mt-2 mr-2 text-white cursor-pointer"
						@click.prevent="deleteImage"
					>delete</span>
					<div
						v-if="!data.fileimg"
						class="absolute top-0 left-0 w-full h-full text-gray-300 bg-black bg-opacity-50 p-4"
					>
						<main
							class="border border-dashed border-white h-full w-full flex justify-center items-center"
						>Rasm tanlang</main>
					</div>
				</label>
			</transition>
		</div>
		<div>
			<label for="shopName" class="ml-1 text-gray-400 text-xs">Do'kon nomi</label>
			<input id="shopName" type="text" minlength="3" required v-model="data.name" class="w-full p-1 border-b border-gray-400 bg-transparent focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"/>
		</div>
		<div>
			<label for="shopType" class="ml-1 text-gray-400 text-xs">Do'kon turi</label>
			<select required v-model="data.type" id="shopType" class="w-full pb-1 border-b border-gray-400 bg-transparent focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
				<option value disabled selected>Do'kon turini tanlang</option>
				<option v-for="type in shoptypes" :value="type.id" :key="type.id">{{type.name}}</option>
			</select>
		</div>
		<div>
			<main class="flex justify-between items-center text-gray-400 text-xs">
				<label for="shopDescription" class="ml-1">Do'kon tavsifi</label>
				<nav>{{textsize}}</nav>
			</main>
			<textarea id="shopDescription" @input="check" v-model="data.description" class="w-full p-1 border-b border-gray-400 bg-transparent focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
		</div>
	</main>
</template>
<script>
export default {
	props: ["formdata"],
	data() {
		return {
			data: this.formdata,
			shoptypes: [],
			limit: 150,
			imgview: true,
		};
	},
	computed: {
		textsize() {return this.limit - this.formdata.description.length;},
	},
	mounted() {
		this.getShopTypes()
		this.deleteImage()
	},
	methods: {
		getShopTypes() {
			window.axios.get("/shop/type").then((res) => {
				this.shoptypes = res.data;
			});
		},
		check() {
			this.data.description = this.data.description.substr(0, this.limit);
		},
		onChange() {
			var file = this.$refs.fileInput.files[0];
			if (file) {
				this.imgview = false;
				setTimeout(() => {
					this.data.fileimg = file;
					this.data.imgdefsrc = URL.createObjectURL(file);
					this.imgview = true;
				}, 200);
			}
			else{
				this.deleteImage()
			}
		},
		deleteImage() {
			this.data.imgdefsrc = '/src/pizza.jpg';
			this.data.fileimg = null;
		},
	},
};
</script>
<style scoped>
textarea {
  resize: none;
}
.preloadImage{
	width: 100%;
	object-fit: cover;
	height: 225px;
}
#shopDescription{
	height: 103px;
}

textarea::-webkit-scrollbar {
   width: 1px;
}

textarea::-webkit-scrollbar-track {
   box-shadow: inset 0 0 1px rgba(0,0,0,0.3);
}

textarea::-webkit-scrollbar-thumb {
  background-color: orange;
}

.imgfade-enter-active,
.imgfade-leave-active {
  transition: opacity 0.5s ease-in-out,transform 0.5s ease-in-out;
}

.imgfade-enter-from,
.imgfade-leave-to {
	opacity: 0;
	transform: scale(1.05);
}
</style>
