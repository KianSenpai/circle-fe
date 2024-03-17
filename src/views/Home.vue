<script setup lang="ts">
import { getBookList, IBooks } from '../utilities/API.ts'
import Card from '../components/Card.vue'
import { onMounted, ref } from 'vue'
import Loading from '../components/Loading.vue'

let data = ref<IBooks | undefined>(undefined)

onMounted(async () => (data.value = await getBookList()))
</script>
<template>
    <div v-if="data" class="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        <Card v-if="data" v-for="b in data.books" :key="b.id" :book="b" />
    </div>
    <loading v-else />
</template>

<style scoped></style>
