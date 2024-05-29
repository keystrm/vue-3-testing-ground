<template>
    <div v-if="visible" class="dialog">
        <div class="dialog-content">
            <p>Select an option:</p>
            <button @click="selectData('Option 1')">Option 1</button>
            <button @click="selectData('Option 2')">Option 2</button>
            <button @click="selectData('Option 3')">Option 3</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSelectDataDialog } from '@/composables/useSelectDataDialog';

const { visible, selectData } = useSelectDataDialog();
</script>

<style scoped>
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
}

.dialog-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
}
</style>