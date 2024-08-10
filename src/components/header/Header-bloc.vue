<script setup lang="ts">
import profilImage from "./profil-image.vue";
</script>

<template>
    <header>
        <h1>Dervaux Esteban Portfolio</h1>
        <h2>The futur gen of developers</h2>
        <profilImage style="width: 20%"></profilImage>
    </header>
</template>

<style scoped lang="scss">
header {
    display: flexbox;

    & > * {
        display: flex;
    }
}

h1,
h2 {
    width: 30%;
}
</style>
