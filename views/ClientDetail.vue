<script setup>
import router from "../router/index.js";
import {computed, onMounted, ref} from "vue";
import {getClientById} from "../api/admin.js";
import {useRoute} from "vue-router";

const goHome = () => {
  router.push('/admin/list');
};

const client = ref("");

const route = useRoute();
const clientId = computed(() => route.params.id);

onMounted(() => {
  getClientById(+clientId.value)
      .then((res) => {
        client.value = res.data;
      })
      .catch((e) => console.error(e));
})
</script>

<template>
  <h2>Заявка пользователя {{ client.firstName }}</h2>

  <p class="mt-8">Счастливого пути</p>

  <div class="button-wrapper">
    <Button label="Назад" severity="warning" @click="goHome"/>
  </div>
</template>

<style scoped>
.button-wrapper {
  margin-top: 8rem;
}
</style>