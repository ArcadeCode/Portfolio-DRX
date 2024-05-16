// Setup for vue.js
import "./assets/css/main.css"
// After this import the main root variables will be include in all templates
// main.css include other import like keyframes and fonts to load
import "./assets/css/responsive.css" // Applied after main.css to fix things with other screen size

import { createApp } from "vue"
import { createWebHistory, createRouter } from 'vue-router'

import home from './App.vue'
import contact from './components/contactMe.vue'

const routes = [
  { path: '/', component: home },
  { path: '/contact', component: contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(home).use(router).mount('#app')