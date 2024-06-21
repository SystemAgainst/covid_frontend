<script setup>
import router from "../router/index.js";
import {computed, onMounted, ref} from "vue";
import {getClientById, updateStatusById} from "../api/admin.js";
import {useRoute} from "vue-router";

const goHome = () => {
  router.push('/admin/list');
};

const client = ref("");
const status = ref("");

const route = useRoute();
const clientId = computed(() => route.params.id);

onMounted(() => {
  getClientById(+clientId.value)
      .then((res) => {
        client.value = res.data;
      })
      .catch((e) => console.error(e));
});

const updateStatus = () => {
  updateStatusById(clientId.value, { status: status.value })
      .then((res) => {
        client.value = res.data;
        status.value = client.value.status;
        goHome();
        alert("Статус успешно обновлен");
      })
      .catch((e) => console.error(e))
};
</script>

<template>
  <h2>Заявка пользователя {{ client.firstName }}</h2>

  <div class="flex gap-8 w-64 m-auto mt-8">
    <label class="mr-4" for="status">Статус:</label>
    <input
        id="status"
        v-model="status"
        type="text"
        placeholder="Введите новый статус"
        class="user-data__input"
    />
  </div>

  <div class="button-wrapper">
    <Button label="Обновить" severity="help" @click="updateStatus"/>
    <Button label="Назад" severity="warning" @click="goHome"/>
  </div>
</template>

<style scoped>
.button-wrapper {
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  gap: 4rem;}

.user-data__input {
  @apply w-48 p-1 text-gray-900 rounded bg-gray-50 text-sm ml-8;
}
</style>