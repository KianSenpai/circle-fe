<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { addToCart, getBookDetail, IBookDetail } from '../utilities/API.ts'
import Loading from '../components/Loading.vue'
import CostumeButton from '../components/CostumeButton.vue'
import { useToast } from '../utilities/store.ts'

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
})

const bookDetail = ref<
    | {
          data: IBookDetail | undefined
          isLoading: boolean
          error: any
      }
    | undefined
>(undefined)

onMounted(async () => {
    bookDetail.value = await getBookDetail(props.id)
})
const store = useToast()

async function handleAddToCart(id: number) {
    if (
        bookDetail.value?.data?.book &&
        bookDetail.value?.data?.book?.availableStock > 0
    ) {
        const res = await addToCart(id)

        if (res?.data) {
            bookDetail.value = {
                data: res.data,
                isLoading: false,
                error: undefined,
            }
            store.updateMessage(res.data.message, 'success')
        } else if (res?.error) {
            store.updateMessage(res.error, 'fail')
        }
    } else {
        store.updateMessage('This book is out of stock T_T', 'fail')
    }
}
</script>

<template>
    <div v-if="bookDetail?.data">
        <div class="mb-6 flex items-center justify-start gap-2">
            <RouterLink to="/" class="text-blue-500">Home</RouterLink>
            <span> > </span>
            <span>{{
                bookDetail?.data
                    ? bookDetail?.data.book.title
                    : 'an amazing book!'
            }}</span>
        </div>
        <div class="flex flex-col gap-4 md:flex-row md:gap-8">
            <img
                src="../assets/book.svg"
                class="w-full rounded-md border py-6 md:w-1/3"
                :alt="
                    bookDetail?.data
                        ? bookDetail?.data.book.title
                        : 'circle challenge'
                "
            />
            <div class="flex w-full flex-col py-6">
                <div class="flex w-full flex-col gap-1 border-b pb-4">
                    <span class="text-xl font-semibold">{{
                        bookDetail?.data?.book.title
                    }}</span>
                    <span>{{ bookDetail?.data?.book.author }}</span>
                </div>
                <div class="flex h-full w-full flex-col justify-between pt-4">
                    <div class="flex items-center gap-1">
                        <span class="text-gray-500">ISBN:</span>
                        <a
                            class="transition-all hover:text-blue-500"
                            :href="`https://isbnsearch.org/isbn/${bookDetail?.data?.book.isbn}`"
                        >
                            {{ bookDetail?.data?.book.isbn }}</a
                        >
                    </div>
                    <div class="flex w-full flex-col gap-2">
                        <div class="flex items-center gap-1">
                            <span class="text-gray-500">Price:</span>
                            <span class="font-semibold"
                                >${{ bookDetail?.data?.book.price }}</span
                            >
                        </div>
                        <div class="flex w-full items-center justify-between">
                            <CostumeButton
                                @click="
                                    handleAddToCart(bookDetail?.data?.book.id)
                                "
                                >Add to cart
                            </CostumeButton>
                            <div
                                v-if="bookDetail?.data?.book.availableStock > 0"
                                class="flex items-center gap-1"
                            >
                                <span class="text-gray-500"
                                    >Available Stock:</span
                                >
                                <span>{{
                                    bookDetail?.data?.book.availableStock
                                }}</span>
                            </div>
                            <span v-else class="text-red-500"
                                >Out of stock :(</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Loading v-else />
</template>
