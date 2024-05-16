<!--
    This is the template for projects who will appear on the site,
-->
<script lang="ts">
import { defineComponent } from 'vue'; // Because of use of Vue 2.0 will be forced to imported it
export default defineComponent({
    props: ["name", "description", "link"], // Generic propriety for this template
    data() {
        return {isExpanded: false}; // Variable to follow expand state
    },
    methods: {
        expandCard() {
            this.isExpanded = !this.isExpanded; // Inversion de l'état de isExpanded
        }
    } 
});
</script>

<template>
        <!-- L'article prend la class projectCard et si isExpanded est true alors surcharge avec la class projectCardExpended-->
        <article class="projectCard" :class="{projectCardExpended : isExpanded}"> 
            <div>
                <h3>{{ name }}</h3>
                <img @click="expandCard()" id="expandIcon"src="../assets/svg/open_in_full.svg" alt="click to expand" width="32" height="32">
            </div>
            <p>{{ description }}</p>
            <a :href="link">Lien vers le projet</a>
        </article>
</template>

<style scoped>
h3 { width: 80%; }
div {
    display: flex;
    flex-wrap: wrap;
}

.projectCard {
    border: var(--block-border-color) solid 3px;
    border-radius: 20px;
    background-color: var(--color-background-soft);
    margin: 10px 10px 10px 10px;
    padding: 10px 15px 10px 15px;
    width: 300px;
    height: 320px;
    overflow: hidden;
}
.projectCard a {
    position: relative;
    background-color: var(--color-background-soft2);
    border: var(--block-border-color) solid 1px;
    border-radius: var(--block-border-radius);
    padding: 3px 3px 3px 3px;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
} .projectCard a:hover { background-color: var(--color-background-dark); }

.projectCard #expandIcon {
    cursor: pointer;
    filter: invert(100%); /*Set to white the icon*/
    position: relative;
    left: 8%;
    padding: 3px 3px 3px 3px;
    margin: 3px 3px 3px 3px;
    border: var(--block-border-color) solid 2px;
    border-radius: 30px;
    transition: border-radius 0.2s ease-in-out;
} .projectCard #expandIcon:hover { border-radius: 10px; }

.projectCardExpended {
    position: absolute;
    z-index: 10;
    border: var(--block-border-color) solid 3px;
    border-radius: 20px;
    background-color: var(--color-background-soft);
    margin: 10px 10px 10px 10px;
    padding: 10px 15px 10px 15px;
    width: 800px;
    height: 400px;
    overflow: scroll;
}
/* Change pos of relative element when card is expended */
.projectCardExpended #expandIcon { left: 15%; }
.projectCardExpended a { top: 50%; }
</style>