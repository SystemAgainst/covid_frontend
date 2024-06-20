<template>
  <div class="has-test">
    <h2>Есть ли у вас тест на ковид?</h2>

    <div class="button-wrapper _container">
      <Button label="Да, есть" severity="success" @click="triggerFileInput"/>
      <Button label="Нет. Создать заявку" severity="help" @click="goHome"/>
    </div>

    <input type="file" ref="fileInput" @change="handleFileUpload" accept="application/pdf" style="display: none"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";

const router = useRouter();
const fileInput = ref(null);
const userId = ref(localStorage.getItem('userId'));

const goHome = () => {
  router.push({ name: 'home' });
};

const triggerFileInput = () => {
  fileInput.value.click();
  router.push({ name: 'success' });
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Здесь можно обработать загруженный файл
    console.log('Загруженный файл:', file);
    // Например, вы можете отправить файл на сервер
    const formData = new FormData();
    formData.append('file', file);
    axios.post(`/uploads/${userId.value}`, formData).then(response => {
      console.log('Файл успешно загружен', response);
    });
  }
};
</script>

<style scoped>
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-top: 2rem;
}
</style>
