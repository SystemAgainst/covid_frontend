<script setup>

import {ref} from "vue";
import {login} from "../api/admin.js";
import router from "../router/index.js";

const email = ref("");
const password = ref("");

const authentication = () => {
  const payload = {
    email: email.value,
    password: password.value,
  };

  login(payload)
      .then((res) => {
        router.push({ name: "AdminList" })
        console.log('Данные успешно отправлены: ', res.data);
      })
      .catch((e) => {
        console.error("Ошибка при отправке данных:", e);
      });
};
</script>

<template>
  <h2>Войти</h2>
  <div class="auth mt-8">

    <form class="input-wrapper" @submit.prevent="authentication()" @keydown.enter="authentication()">
      <input
          v-model="email"
          type="email"
          class="auth__input mb-4"
          placeholder="Логин админа"
      />
      <input
          v-model="password"
          type="password"
          class="auth__input mb-4"
          placeholder="Пароль админа"
      />

      <div class="button-wrapper">
        <router-link to="/">
          <Button type="button" label="Домой" severity="info"/>
        </router-link>
        <Button type="submit" label="Войти" severity="help"/>
      </div>
    </form>
  </div>
</template>

<style scoped>
.auth {
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

.auth__input {
  @apply block w-1/2 p-2 text-gray-900 rounded bg-gray-50 text-sm;
}

.button-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-top: .75rem;
  gap: 1rem;
}
</style>