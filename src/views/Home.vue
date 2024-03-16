<script setup lang="ts">
import getBookList, { IBooks } from '../utilities/API.ts'
import Card from '../components/Card.vue'
import { onMounted, ref } from 'vue'

let data = ref<IBooks | undefined>(undefined)

onMounted(async () => (data.value = await getBookList()))
</script>
<template>
    <div class="grid w-full grid-cols-4 gap-4">
        <Card v-if="data" v-for="b in data.books" :key="b.id" :book="b" />
    </div>
</template>

<style scoped></style>
