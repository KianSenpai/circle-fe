<script setup lang="ts">
import { IBook } from '../utilities/API.ts'

defineProps<{ book: IBook }>()
</script>

<template>
    <router-link
        :to="`/book/${book.id}`"
        class="flex cursor-pointer flex-col rounded-md border p-4 shadow transition-all hover:shadow-md"
    >
        <span class="text font-semibold">{{ book.title }}</span>
        <span>{{ book.author }}</span>
        <span>${{ book.price }}</span>
        <span class="text-xs text-gray-500">ISBN: {{ book.isbn }}</span>
    </router-link>
</template>

<style scoped></style>
