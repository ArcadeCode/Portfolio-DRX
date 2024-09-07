<script setup lang="ts">
import profilImage from "./profil-image.vue";
</script>

<template>
    <header>
        <div id="title">
            <h1>
                Dervaux Esteban
                <span class="txtGradientColor">Portfolio</span>
            </h1>
            <h2>
                The
                <span class="txtGradientColor">futur</span>
                gen of developers
            </h2>
        </div>
        <profilImage style="width: 20%"></profilImage>
    </header>
</template>

<style scoped lang="scss">
$title-word-spacing: 0px;

h1 {
    font-size: 7vh;
    margin: 0;
}
h2 {
    font-size: 5vh;
    margin: 0;
}

header {
    display: flex;
    flex-direction: row;
    align-items: center;

    word-spacing: $title-word-spacing;

    & > * {
        display: flex;
        width: 50%;
    }

    & > div {
        width: 75%;
    }
}

#title {
    display: flex;
    flex-direction: column;

    & > * {
        display: flex;
    }
}

.txtGradientColor {
    margin: 0 calc($title-word-spacing + 10px);
    font-weight: bold;
    background: linear-gradient(
        to right,
        #ff7e5f,
        #feb47b
    ); /* Dégradé de couleur */
    -webkit-background-clip: text; /* Nécessaire pour les navigateurs basés sur WebKit */
    -moz-background-clip: text;
    background-clip: text;
    color: transparent; /* Cache la couleur de texte pour ne montrer que le fond */

    // Add mouvement
    background-size: 200% 200%;
    animation: gradientMovement 5s ease-in-out infinite;
}
@keyframes gradientMovement {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}
</style>
