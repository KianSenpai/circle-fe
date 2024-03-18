<script setup lang="ts">
import { getBookList, IBooks } from '../utilities/API.ts'
import Card from '../components/Card.vue'
import { onMounted, ref } from 'vue'
import Loading from '../components/Loading.vue'

const bookList = ref<
    | {
          data: IBooks | undefined
          isLoading: boolean
          error: any
      }
    | undefined
>(undefined)

onMounted(async () => (bookList.value = await getBookList()))
</script>

<template>
    <div
        v-if="bookList?.data"
        class="grid w-full grid-cols-1 gap-4 md:grid-cols-3"
    >
        <Card v-for="b in bookList?.data?.books" :key="b.id" :book="b" />
    </div>
    <Loading v-else />
</template>
