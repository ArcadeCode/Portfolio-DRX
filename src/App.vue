<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <RouterView />
</template>

<style lang="scss">
* {
    z-index: 10; // Prevent mouse blob to get on top of readable elements
}
</style>
