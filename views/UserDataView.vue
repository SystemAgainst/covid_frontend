<script setup>
import UserData from "../src/components/UserData.vue";
</script>

<template>
  <h2 class="mb-8">Заполните данные</h2>
  <user-data>
    <template #user-data-buttons>
      <Button label="Дальше" severity="success" raised />
    </template>
  </user-data>
</template>

<style scoped>

</style>