<template>
  <header>
    <div class="wrapper">
      <span>HI!! </span>
    </div>
  </header>

  <main>
    <div>
      <button @click="handleSelectData">Select Data</button>
      <SelectDataDialog v-if="dialogVisible" />
      <div v-if="selectedData">Selected Data: {{ selectedData }}</div>
    </div>
  </main>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSelectDataDialog } from '@/composables/useSelectDataDialog';
import SelectDataDialog from '@/components/SelectDataDialog.vue';

const selectedData = ref<string | null>(null);
const { waitForSelection, visible: dialogVisible } = useSelectDataDialog();

const handleSelectData = async () => {
  selectedData.value = await waitForSelection();
  // Proceed with the rest of your logic using the selected data
  console.log('User selected:', selectedData.value);
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>