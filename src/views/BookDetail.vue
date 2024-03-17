<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getBookDetail, IBookDetail } from '../utilities/API.ts'
import Loading from '../components/Loading.vue'

let data = ref<IBookDetail | undefined>(undefined)
const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
})
onMounted(async () => {
    data.value = await getBookDetail(props.id)
    console.log(data.value)
})
</script>

<template>
    <div v-if="data">
        <div class="mb-6 flex items-center justify-start gap-2">
            <router-link to="/" class="text-blue-500">Home</router-link>
            <span> > </span>
            <span>{{ data ? data.book.title : 'an amazing book!' }}</span>
        </div>
        <div class="flex flex-col gap-8 md:flex-row">
            <img
                src="../assets/book.svg"
                class="w-full rounded-md border py-6 md:w-1/3"
                :alt="data ? data.book.title : 'circle challenge'"
            />
            <div class="flex flex-col">
                <div class="flex flex-col">
                    <span>{{}}</span>
                </div>
            </div>
        </div>
    </div>
    <loading v-else />
</template>

<style scoped></style>
