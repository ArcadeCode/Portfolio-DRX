<script setup lang="ts">
import HeaderBloc from "@/components/header/Header-bloc.vue";
import meBloc from "@/components/sections/me/me-bloc.vue";
import skillsArticle from "@/components/sections/skills-article/skills-article.vue";

import TimelineBloc from "@/components/timeline/Timeline-bloc.vue";

import blobDiv from "@/components/blob/blob-div.vue";
</script>

<template>
    <main>
        <HeaderBloc></HeaderBloc>
        <meBloc></meBloc>
        <TimelineBloc></TimelineBloc>
        <!--<learnMap></learnMap>-->
        <!-- Here we need to use a graph generator -->
        <!-- But basically :
                - 8ans = Découverte de l'info
                - 6ème = Découverte de Scratch
                - 5ème = Découverte de Python
                - Pandemie = Découverte du WEB 2.0
                - Seconde, Première = Découverte du WEB 3.0 et C/C++ 
                -->
        <skillsArticle></skillsArticle>
    </main>

    <blobDiv></blobDiv>
</template>
