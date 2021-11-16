<template>
	<transition name="fade">
		<Notification v-if="$store.state.error" />
	</transition>
	<router-view></router-view>
</template>
<script>
import Notification from "@/components/main/Notification";
export default {
	components: {
		Notification,
	},
};
</script>
<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
html, body, #app {
	height: 100%;
}
body {
	background: white;
}
input:focus{
	outline: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
   transition: background-color 5000s ease-in-out 0s;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease,transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.form-width{
   width: 768px;
}
body::-webkit-scrollbar {
  width: 2px;               /* ширина scrollbar */
}
body::-webkit-scrollbar-track {
  background: white;        /* цвет дорожки */
}
body::-webkit-scrollbar-thumb {
  background-color: rgb(34, 136, 85);    /* цвет плашки */
  border-radius: 1px;       /* закругления плашки */
}
</style>