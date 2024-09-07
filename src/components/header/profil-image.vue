<template>
    <div>
        <!-- NOTE: Don't forget to add srcset when get picture to more lazy loading -->
        <img src="@/assets/profilImg.bmp" alt="My profil picture" />
    </div>
</template>

<style scoped lang="scss">
img {
    // Only standart informations, the rest will be set when importing the vue file
    /* Size rules */
    aspect-ratio: 1 / 1;
    max-width: 100%;
    min-width: 100%;
    height: auto;
    /* Beautify rules */
    border-radius: 50%; // Circle radius
    object-fit: cover;
    display: block; // To erase white spaces
}
</style>
