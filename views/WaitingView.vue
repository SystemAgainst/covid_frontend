<script setup>
import router from "../router/index.js";

const goHome = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <h2>Благодарим за уделенное время!</h2>

  <div class="my-8">Ожидайте результаты теста</div>

  <div class="button-wrapper">
    <Button label="Вернуться домой" severity="warning" @click="goHome"/>
  </div>
</template>

<style scoped>
.button-wrapper {
  margin-top: 8rem;
}
</style>