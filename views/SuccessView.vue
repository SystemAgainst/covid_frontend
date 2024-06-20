<script setup>
import router from "../router/index.js";

const goHome = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <h2>Благодарим за уделенное время!</h2>

  <div class="button-wrapper _container">
    <p class="mb-8">Счастливого пути</p>

    <Button label="Вернуться домой" severity="warning" @click="goHome"/>
  </div>
</template>

<style scoped>

</style>