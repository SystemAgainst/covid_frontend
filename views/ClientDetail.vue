<script setup>
import router from "../router/index.js";
import {computed, onMounted, ref} from "vue";
import {getClientById, sendEmail, updateStatusById} from "../api/admin.js";
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

const sendEmailToUser = () => {
  sendEmail(clientId.value, { status: status.value })
      .then(() => {
        updateStatus();
        alert("Письмо отправлено клиенту на почту");
      })
      .catch((e) => console.error(e));
};
</script>

<template>
  <h2>Заявка пользователя {{ client.firstName }}</h2>

  <div class="client-detail__wrapper">
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
    <Button label="Назад" @click="goHome"/>
    <Button label="Отправить на почту" severity="warn" @click="sendEmailToUser()"/>
  </div>
</template>

<style scoped>
.button-wrapper {
  @apply mt-32 flex justify-center gap-16;
}

.user-data__input {
  @apply w-48 py-1 px-2 text-gray-900 rounded bg-gray-50 text-sm;
}

.client-detail__wrapper {
  @apply flex items-center justify-center gap-4 w-64 m-auto;
}
</style>