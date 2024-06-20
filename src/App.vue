<script setup>
import UserData from "./components/UserData.vue";
</script>

<template>
  <div class="_container">
    <h2 class="mb-8">Заполните данные</h2>
    <user-data>
      <template #user-data-buttons>
        <Button label="Сохранить" severity="success" raised />
        <Button label="Загрузить" severity="help" raised />
      </template>
    </user-data>
  </div>
</template>

<style scoped>

</style>
