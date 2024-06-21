<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const clients = ref([
  { id: 1, name: 'Client One' },
  { id: 2, name: 'Client Two' },
  { id: 3, name: 'Client Three' },
]);

const router = useRouter();

const goToClientDetail = (id) => {
  router.push({ name: 'ClientDetail', params: { id } });
};
</script>

<template>
  <h2>Список клиентов</h2>
  <div class="client-list">
    <ul>
      <li v-for="client in clients" :key="client.id" @click="goToClientDetail(client.id)">
        {{ client.name }}
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
  transition: background-color 0.3s;
}

.client-list li:hover {
  background-color: #f0f0f0;
}
</style>