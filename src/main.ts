// Setup for vue.js
import "./assets/css/main.css"
// After this import the main root variables will be include in all templates
// main.css include other import like keyframes and fonts to load
import "./assets/css/responsive.css" // Applied after main.css to fix things with other screen size
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app') // This function mount the vue.js app
