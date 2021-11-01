<template>
	<transition name="fade">
		<Notification v-if="$store.state.error"/>
	</transition>
	<router-view></router-view>
</template>
<script>
import Notification from '@/components/Notification'
export default {
	components:{
		Notification
	},
}
</script>
<style>
@import url('/src/tailwind.min.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

html, body, #app {
	height: 100%;
}
body {
	background: white;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
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
</style>