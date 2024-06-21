<script setup>
import adminImage from './assets/admin.svg';
</script>

<template>
  <div class="_container">
    <router-link class="" to="/admin-auth">
      <img :src="adminImage" class="admin"  alt="admin"/>
    </router-link>
    <router-view />
  </div>
</template>

<style scoped>
.admin {
  max-width: 100%;
  width: 25px;
  position: absolute;
  right: 2rem;
  top: 1rem;
}
</style>
