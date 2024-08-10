<script setup lang="ts">
import HeaderBloc from "@/components/header/Header-bloc.vue";
import meBloc from "@/components/sections/me/me-bloc.vue";

import blobDiv from "@/components/blob/blob-div.vue";
</script>

<template>
    <main>
        <HeaderBloc></HeaderBloc>
        <meBloc></meBloc>
    </main>

    <blobDiv></blobDiv>
</template>
