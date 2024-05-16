<script lang="ts">
import { ref } from 'vue';
export default {
    data() {
        return {
            toggleImgA: true,
        }
    },
    methods: {
        toggleImg(imageID:string) {
            const img = document.getElementById(imageID);
            if (img) { // If element exist
                if (img && img.style.display === "none" || !img.style.display) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            }
        
        },
    }
}
 
</script>

<template>
    <h1>Mes chats</h1>
    <section>
        <article>
            <h1>Nikita</h1>
            <img id="imgA" src="../assets/imgs/nikita.jpg" alt="Image de Nikita">
            <button @click="toggleImg('imgA')">Cacher</button>
        </article>
        <article>
            <h1>Nouméa</h1>
            <img id="imgB" src="../assets/imgs/noumea.jpg" alt="Image de Nouméa">
            <button @click="toggleImg('imgB')">Cacher</button>
        </article>
        <article>
            <h1>Mathilda</h1>
            <img id="imgC" src="../assets/imgs/mathilda.jpg" alt="Image de Mathilda">
            <button @click="toggleImg('imgC')">Cacher</button>
        </article>
    </section>
</template>


<style scoped>
template, section {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    justify-content: center;
    text-align: center;
    border: solid 3px var(--block-border-color);
    border-radius: 8px;
    margin: 5px 5px 5px 5px;
}
article {
    width: 30%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
article img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}

</style>