<script setup lang="ts">
interface IButton {
    isDisabled?: boolean
}

defineProps<IButton>()
</script>

<template>
    <button
        :class="`w-fit rounded-md border px-2 py-1 transition-all ${isDisabled ? 'cursor-not-allowed border-gray-500 text-gray-500' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`"
    >
        <slot />
    </button>
</template>
