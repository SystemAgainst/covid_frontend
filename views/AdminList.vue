<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getAllClients } from "../api/admin.js";

const clients = ref([]);
const filteredClients = ref([]);
const filter = ref('no_test');
const router = useRouter();

const goToClientDetail = (id) => {
  router.push({ name: 'ClientDetail', params: { id } });
};

const applyFilter = () => {
  if (filter.value === 'all') {
    filteredClients.value = clients.value;
  } else if (filter.value === 'no_test') {
    filteredClients.value = clients.value.filter(client => client.status === 'Нет теста');
  } else if (filter.value === 'with_test') {
    filteredClients.value = clients.value.filter(client => client.status !== 'Нет теста');
  }
};

onMounted(() => {
  getAllClients()
      .then((res) => {
        console.log(res.data.rows);
        clients.value = res.data.rows;
        applyFilter();
      })
      .catch((e) => console.error(e));
});

watch(filter, applyFilter);
</script>

<template>
  <h2>Список клиентов</h2>
  <div class="button-wrapper">
    <Button label="Все пользователи" severity="help" @click="filter = 'all'"/>
    <Button label="Новые пользователи" @click="filter = 'no_test'"/>
    <Button label="Прошли тестирование" severity="warn" @click="filter = 'with_test'"/>
  </div>
  <div class="client-list">
    <ul>
      <li v-for="client in filteredClients" :key="client.id" @click="goToClientDetail(client.id)">
        {{ client.firstName }} {{ client.lastName }}.
        <span>Статус: {{ client.status }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.button-wrapper {
  @apply mt-2 flex justify-center gap-4;
}

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