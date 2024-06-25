<script setup>
import {ref, computed} from "vue";
import router from "../router/index.js";
import {useUserStore} from "../store/userStore.js";

const userStore = useUserStore();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const ticketNumber = ref("");
const passportData = ref("");
const flightTime = ref("");
const pcrTestTime = ref("");

const userId = ref(null);

// Валидация разницы времени между вылетом и сдачей ПЦР-теста
const isTimeValid = computed(() => {
  if (!flightTime.value || !pcrTestTime.value) {
    return false;
  }
  const flightTimeDate = new Date(flightTime.value);
  const pcrTestTimeDate = new Date(pcrTestTime.value);
  return (flightTimeDate - pcrTestTimeDate) >= 2 * 60 * 60 * 1000;
});

const nextStep = () => {
  if (!isTimeValid.value) {
    alert("Между временем вылета и сдачей ПЦР-теста должно быть минимум два часа");
    return;
  }

  const payload = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    ticketNumber: ticketNumber.value,
    passportData: passportData.value,
    flightTime: flightTime.value,
    pcrTestTime: pcrTestTime.value,
  };

  console.log("Payload:", payload);

  userStore.setUserData({...payload, id: userId.value});
  router.push({name: "hasTest"});
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
      <input
          v-model="passportData"
          type="text"
          class="user-data__input mb-4"
          placeholder="Паспортные данные"
      />
      <span>Время вылета:</span>
      <input
          v-model="flightTime"
          type="datetime-local"
          class="user-data__input mb-4"
      />
      <span>Время сдачи пцр-теста:</span>
      <input
          v-model="pcrTestTime"
          type="datetime-local"
          class="user-data__input mb-4"
      />
      <div class="button-wrapper">
        <button type="submit" :disabled="!isTimeValid" class="btn btn-success">
          Дальше
        </button>
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

.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-success {
  background-color: #28a745;
  color: white;
  border: none;
}

.btn-success:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>
