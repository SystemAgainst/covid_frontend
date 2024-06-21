<script setup>
import router from "../router/index.js";

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <h2>Заявка пользователя ***</h2>

  <p class="mt-8">Счастливого пути</p>

  <div class="button-wrapper">
    <Button label="Вернуться домой" severity="warning" @click="goHome"/>
  </div>
</template>

<style scoped>
.button-wrapper {
  margin-top: 8rem;
}
</style>