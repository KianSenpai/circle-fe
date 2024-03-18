<script setup lang="ts">
import { useToast } from '../utilities/store.ts'

const store = useToast()
</script>

<template>
    <div
        v-if="store.message.length"
        :class="`${store.type === 'success' ? 'border-emerald-500 bg-emerald-100 text-emerald-500' : 'border-rose-500 bg-rose-100 text-rose-500'} absolute right-4 top-4 rounded-md border px-6 py-1 transition-all`"
    >
        {{ store.message }}
    </div>
</template>

<style scoped></style>
