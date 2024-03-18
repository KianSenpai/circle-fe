<script setup lang="ts">
import { IBook } from '../utilities/API.ts'

defineProps<{ book: IBook }>()
</script>

<template>
    <router-link
        :to="`/book/${book.id}`"
        class="flex cursor-pointer gap-4 rounded-md border bg-gray-50 p-4 shadow transition-all hover:shadow-md"
    >
        <img src="../assets/book.svg" width="100" :alt="book.title" />
        <div class="flex h-full w-full flex-col justify-between">
            <div class="flex flex-col">
                <span class="text font-semibold">{{ book.title }}</span>
                <span>{{ book.author }}</span>
            </div>
            <div class="flex w-full items-center justify-between">
                <span>${{ book.price }}</span>
                <span class="text-xs text-gray-500"
                    >Available Stock: {{ book.availableStock }}</span
                >
            </div>
            <!--            <span class="text-xs text-gray-500">ISBN: {{ book.isbn }}</span>-->
        </div>
    </router-link>
</template>
