<script setup lang="ts">
import { getBookList } from '../utilities/API.ts'
import Card from '../components/Card.vue'
import { onMounted, ref } from 'vue'
import Loading from '../components/Loading.vue'

const bookList = ref<
    | {
          data:
              | {
                    books: {
                        id: number
                        title: string
                        author: string
                        price: number
                        isbn: string
                        availableStock: number
                    }[]
                }
              | undefined
          isLoading: boolean
          error: any
      }
    | undefined
>(undefined)

onMounted(async () => (bookList.value = await getBookList()))
</script>

<template>
    <loading v-if="bookList?.isLoading" />
    <div v-else class="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        <Card v-for="b in bookList?.data?.books" :key="b.id" :book="b" />
    </div>
</template>
