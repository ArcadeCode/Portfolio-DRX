<script setup lang="ts">
import { onMounted } from "vue";
import { moveBlob, setBlobSize } from "./blob.ts";

// Need onMounted to make mouseEvent working
onMounted(() => {
    const blob = document.querySelector(".blob") as HTMLElement | null;
    setBlobSize(); // Give a random size just for fun

    if (blob !== null) {
        // If exist
        document.addEventListener("mousemove", (event: MouseEvent) =>
            moveBlob(event, blob)
        );
    }
});
</script>

<template>
    <div id="blobCanvas">
        <div class="blob"></div>
    </div>
</template>

<style scoped src="./blob.scss"></style>
<style lang="scss">
#blobCanvas {
    width: 0;
    height: 0;
}
</style>
