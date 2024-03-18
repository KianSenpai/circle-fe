<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
    getBookDetail,
    IBookDetail,
    postAddBookToCart,
} from '../utilities/API.ts'
import Loading from '../components/Loading.vue'
import CostumeButton from '../components/CostumeButton.vue'

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
})

let data = ref<IBookDetail | undefined>(undefined)

onMounted(async () => {
    data.value = await getBookDetail(props.id)
})
</script>

<template>
    <div v-if="data">
        <div class="mb-6 flex items-center justify-start gap-2">
            <router-link to="/" class="text-blue-500">Home</router-link>
            <span> > </span>
            <span>{{ data ? data.book.title : 'an amazing book!' }}</span>
        </div>
        <div class="flex flex-col gap-4 md:flex-row md:gap-8">
            <img
                src="../assets/book.svg"
                class="w-full rounded-md border py-6 md:w-1/3"
                :alt="data ? data.book.title : 'circle challenge'"
            />
            <div class="flex w-full flex-col py-6">
                <div class="flex w-full flex-col gap-1 border-b pb-4">
                    <span class="text-xl font-semibold">{{
                        data.book.title
                    }}</span>
                    <span>{{ data.book.author }}</span>
                </div>
                <div class="flex h-full w-full flex-col justify-between pt-4">
                    <div class="flex items-center gap-1">
                        <span class="text-gray-500">ISBN:</span>
                        <a
                            class="transition-all hover:text-blue-500"
                            :href="`https://isbnsearch.org/isbn/${data.book.isbn}`"
                        >
                            {{ data.book.isbn }}</a
                        >
                    </div>
                    <div class="flex w-full flex-col gap-2">
                        <div class="flex items-center gap-1">
                            <span class="text-gray-500">Price:</span>
                            <span class="font-semibold"
                                >${{ data.book.price }}</span
                            >
                        </div>
                        <div class="flex w-full justify-between">
                            <costume-button
                                @click="postAddBookToCart(data.book.id)"
                                >Add to cart
                            </costume-button>
                            <div class="flex items-center gap-1">
                                <span class="text-gray-500"
                                    >Available Stock:</span
                                >
                                <span>{{ data.book.availableStock }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <loading v-else />
</template>

<style scoped></style>
