<script setup lang="ts">
import { IBook } from '../utilities/API.ts'

defineProps<{ book: IBook }>()
</script>

<template>
    <div
        class="flex cursor-pointer flex-col items-center rounded border p-4 shadow transition-all hover:shadow-lg"
    >
        <span>{{ book.title }}</span>
        <span>{{ book.author }}</span>
        <span>${{ book.price }}</span>
        <span class="text-xs text-gray-500">ISBN: {{ book.isbn }}</span>
    </div>
</template>

<style scoped></style>
