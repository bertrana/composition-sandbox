import { reactive } from "vue";

const data = reactive({
  isOpen: false,
  modalType: ""
})

export const useModal = () => {
  const openModal = (type: string) => {
    data.isOpen = true;
    data.modalType = type;
  }

  const closeModal = () => {
    data.isOpen = false;
  }

  return {
    data,
    openModal,
    closeModal
  }
}