<script setup lang="ts">
import events from "./timeline.ts";
</script>
<template>
    <div class="timeline">
        <div class="timeline-item" v-for="event in events" :key="event.id">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>{{ event.title }}</h3>
                <p>{{ event.date }}</p>
                <p>{{ event.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.timeline {
    position: relative;
    margin: 0 auto;
    padding: 20px;
    max-width: 400px;
}
.timeline-item {
    display: flex;
    margin-bottom: 20px;
    position: relative;
}
.timeline-dot {
    background: #007bff;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    position: relative;
    top: 10px;
}
.timeline-content {
    background: #f9f9f9;
    padding: 10px;
    border-radius: 4px;
}
</style>
