<script setup>
import { clientCreate } from "../api/client.js";
import { ref } from "vue";
import router from "../router/index.js";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const ticketNumber = ref("");

const userId = ref(null);

const nextStep = () => {
  const payload = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    ticketNumber: ticketNumber.value
  };

  clientCreate(payload)
      .then((res) => {
        userId.value = res.data.user.id;
        localStorage.setItem('userId', userId.value);
        console.log(userId.value);
        router.push({ name: "hasTest" })
        console.log('Данные успешно отправлены: ', res.data.user);
      })
      .catch((e) => {
        console.error("Ошибка при отправке данных:", e);
      });
};
</script>

<template>
  <h2 class="mb-8">Заполните данные</h2>
  <div class="user-data">
    <form class="input-wrapper" @submit.prevent="nextStep">
      <input
          v-model="firstName"
          type="text"
          class="user-data__input mb-4"
          placeholder="Имя"
      />
      <input
          v-model="lastName"
          type="text"
          class="user-data__input mb-4"
          placeholder="Фамилия"
      />
      <input
          v-model="email"
          type="text"
          class="user-data__input mb-4"
          placeholder="Почта"
      />
      <input
          v-model="ticketNumber"
          type="text"
          class="user-data__input mb-4"
          placeholder="Номер билета"
      />
      <div class="button-wrapper">
        <Button type="submit" label="Дальше" severity="success"/>
      </div>
    </form>
  </div>
</template>

<style scoped>
.user-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.user-data__input {
  @apply block w-1/2 p-2 text-gray-900 rounded bg-gray-50 text-sm;
}

.button-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-top: .75rem;
}
</style>
