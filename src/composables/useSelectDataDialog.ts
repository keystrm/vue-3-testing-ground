import { ref } from "vue";

export function useSelectDataDialog() {
  const visible = ref(false);
  const selectedData = ref<string | null>(null);

  const showDialog = () => {
    visible.value = true;
  };

  const hideDialog = () => {
    visible.value = false;
  };

  const selectData = (data: string) => {
    selectedData.value = data;
    hideDialog();
  };

  const waitForSelection = (): Promise<string> => {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (selectedData.value !== null) {
          clearInterval(interval);
          resolve(selectedData.value);
          selectedData.value = null; // Reset for next use
        }
      }, 100);
      showDialog();
    });
  };

  return {
    visible,
    selectData,
    waitForSelection,
  };
}
