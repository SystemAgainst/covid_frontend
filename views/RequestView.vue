<script setup>
import { useUserStore } from "../store/userStore.js";
import { storeToRefs } from "pinia";
import {clientCreate} from "../api/client.js";
import router from "../router/index.js";

const userStore = useUserStore();
const { firstName, lastName, email, ticketNumber, userId, passportData, flightTime, pcrTestTime } = storeToRefs(userStore);

const nextStep = () => {
  const payload = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    ticketNumber: ticketNumber.value,
    passportData: passportData.value,
    flightTime: flightTime.value,
    pcrTestTime: pcrTestTime.value,
  };

  clientCreate(payload)
      .then((res) => {
        userId.value = res.data.user.id;
        userStore.setUserData({ ...payload, id: userId });
        router.push('/client/waiting')
        console.log('Данные успешно отправлены: ', res.data.user);
      })
      .catch((e) => {
        console.error("Ошибка при отправке данных:", e);
      });
};
</script>

<template>
  <h2>Создать заявку</h2>
  <div class="request">
    <form class="input-wrapper" @submit.prevent="nextStep">
      <div class="flex items-baseline gap-4">
        <span>Ваше имя:</span>
        <input
            v-model="firstName"
            type="text"
            class="user-data__input mb-4"
            readonly
        />
      </div>
      <div class="flex items-baseline gap-4">
        <span>Ваша фамилия:</span>
        <input
            v-model="lastName"
            type="text"
            class="user-data__input mb-4"
            readonly
        />
      </div>
      <div class="flex items-baseline gap-4">
        <span>Ваша почта:</span>
        <input
            v-model="email"
            type="text"
            class="user-data__input mb-4"
            readonly
        />
      </div>
      <div class="flex items-baseline gap-4">
        <span>Ваш билет:</span>
        <input
            v-model="ticketNumber"
            type="text"
            class="user-data__input mb-4"
            readonly
        />
      </div>
      <div class="flex items-baseline gap-4">
        <span>Ваши паспортные данные:</span>
        <input
            v-model="passportData"
            type="text"
            class="user-data__input mb-4"
            readonly
        />
      </div>
      <div class="flex items-baseline gap-4">
        <span>Время вылета:</span>
        <input
            v-model="flightTime"
            type="text"
            class="user-data__input mb-4"
            readonly
        />
      </div>
      <div class="flex items-baseline gap-4">
        <span>Время сдачи пцр-теста:</span>
        <input
            v-model="pcrTestTime"
            type="text"
            class="user-data__input mb-4"
            readonly
        />
      </div>
      <div class="button-wrapper">
        <Button type="submit" label="Создать заявку" severity="success"/>
      </div>
    </form>
  </div>
</template>

<style scoped>
.request {
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

.button-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-top: .75rem;
}
.user-data__input {
  @apply block w-24 p-1 text-gray-900 rounded bg-gray-50 text-sm;
}
</style>
