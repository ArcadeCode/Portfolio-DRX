<script setup lang="ts">
// Globals templates
import Header from "./components/globalHeader.vue";
import Footer from "./components/globalFooter.vue";
// Specifics templates
import aboutMe from "./components/aboutMe.vue";
import contactMe from "./components/contactMe.vue";
import project from "./components/project.vue"
// Making contactMe.vue hide while a button is not clicked
import { ref, triggerRef } from "vue";
const popupTrigger_contactMe = ref({
    buttonTrigger : false
});
</script>

<template>
    <main>
        <Header></Header>
        <contactMe v-if="popupTrigger_contactMe.buttonTrigger"></contactMe>
        <aboutMe></aboutMe>
        <section id="projectsFlexbox">
            <project name="Mon projet A" description="Lorem ipsum veniam proident sed ut sint sunt enim dolore nostrud magna dolore incididunt qui sunt ex ut sit in excepteur amet nulla magna velit et et eiusmod id anim " link="https://google.com"/>
            <project name="Mon projet B" description="Lorem ipsum veniam proident sed ut sint sunt enim dolore nostrud magna dolore incididunt qui sunt ex ut sit in excepteur amet nulla magna velit et et eiusmod id anim " link="https://google.com"/>
            <project name="Mon projet C" description="Lorem ipsum veniam proident sed ut sint sunt enim dolore nostrud magna dolore incididunt qui sunt ex ut sit in excepteur amet nulla magna velit et et eiusmod id anim " link="https://google.com"/>
            <project name="Mon projet D qui déborde" description="Lorem ipsum veniam proident sed ut sint sunt enim dolore nostrud magna dolore incididunt qui sunt ex ut sit in excepteur amet nulla magna velit et et eiusmod id anim Lorem ipsum consectetur dolore anim duis velit laboris nisi ullamco eiusmod adipisicing quis adipisicing enim et reprehenderit deserunt qui tempor labore sed eiusmod ullamco duis do aliqua irure laborum pariatur dolore culpa amet pariatur incididunt eu veniam esse in nostrud " link="https://google.com"/>
            <project name="Mon projet E qui déborde encore plus" description="Lorem ipsum veniam proident sed ut sint sunt enim dolore nostrud magna dolore incididunt qui sunt ex ut sit in excepteur amet nulla magna velit et et eiusmod id anim Lorem ipsum consectetur dolore anim duis velit laboris nisi ullamco eiusmod adipisicing quis adipisicing enim et reprehenderit deserunt qui tempor labore sed eiusmod ullamco duis do aliqua irure laborum pariatur dolore culpa amet pariatur incididunt eu veniam esse in nostrud " link="https://google.com"/>
        </section>
        <Footer></Footer>
    </main>
</template>

<style scoped>
#projectsFlexbox {
    border: var(--debug-color-3) 3px solid;
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>