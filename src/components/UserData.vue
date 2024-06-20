<script setup>
</script>

<template>
  <div class="user-data">
    <div class="input-wrapper">
      <input type="text" class="user-data__input mb-4" placeholder="Имя">
      <input type="text" class="user-data__input mb-4" placeholder="Фамилия">
      <input type="email" class="user-data__input mb-4" placeholder="Почта">
      <input type="text" class="user-data__input mb-4" placeholder="Номер билета">
    </div>
    <div class="button-wrapper">
      <slot name="user-data-buttons" />
    </div>
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
  @apply block w-1/2 p-2 text-gray-900 rounded-xl bg-gray-50 text-xs;
}
.button-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-top: .75rem;
}
</style>
