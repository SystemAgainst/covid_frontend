<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAllClients } from "../api/admin.js";

const clients = ref([]);

const router = useRouter();

const goToClientDetail = (id) => {
  router.push({ name: 'ClientDetail', params: { id } });
};

onMounted(() => {
  getAllClients()
      .then((res) => {
        clients.value = res.data.rows;
        console.log(clients.value);
      })
      .catch((e) => console.error(e));
})
</script>

<template>
  <h2>Список клиентов</h2>
  <div class="client-list">
    <ul>
      <li v-for="client in clients" :key="client.id" @click="goToClientDetail(client.id)">
        {{ client.firstName }} {{ client.lastName }}.
        <span>Статус: {{ client.status }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.client-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

.client-list ul {
  list-style: none;
  padding: 0;
}

.client-list li {
  text-align: left;
  padding: .5rem 3rem;
  margin: 0.5rem 0;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  transition: all .5s;
}

.client-list li:hover {
  color: #212227;
  background-color: #f0f0f0;
}
</style>