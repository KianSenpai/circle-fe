<script setup lang="ts">
import Container from './components/Container.vue'
import ToastMessage from './components/ToastMessage.vue'
</script>

<template>
    <Container>
        <ToastMessage />
        <RouterView />
    </Container>
</template>
