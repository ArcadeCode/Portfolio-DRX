<script setup lang="ts">
// Globals templates
import Header from "./components/globalHeader.vue";
import Footer from "./components/globalFooter.vue"; // FIXME: FIX the issue about the footer wrapping
// Specifics templates
import aboutMe from "./components/aboutMe.vue";
import project from "./components/project.vue";
import contactMe from "./components/contactMe.vue";
import cat from "./components/myCat.vue";
</script>

<template>
    <main>
        <Header></Header>
        <!-- <contactMe></contactMe> -->
        <!-- TODO: Faire fonctionner cette popup EN V.3.x-->
        <aboutMe></aboutMe>
        <section id="projectsFlexbox">
            <project name="Kapla" description="Un environnement de développement tout en un fait pour du dev python, C et C++" link="https://github.com/ArcadeCode/Kapla"/>
            <project name="Arcade Music Interface" description="Une interface personnalisé pour l'utilisation de spotify avec mes propres idées et concepts ajouté." link="https://github.com/ArcadeCode/Arcade-Music-Interface"/>
            <project name="NSI-project" description="Un project fait en nsi dans le cadre de démontrer nos compétences en python, ce projet est un jeu inspiré énormément du Textorisct. Ce projet est basé sur PyGame avec un text listener complètement coder de 0 utilisant simplement le module basique keyboard." link="https://github.com/ArcadeCode/nsi-project-2024"/>
        </section>
        <cat></cat>
        <contactMe></contactMe>
        <!-- <Footer></Footer> -->
    </main>
</template>

<style scoped>

#projectsFlexbox {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>