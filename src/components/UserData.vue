<script setup>

</script>

<template>
  <div class="user-data">
    <input type="text" id="small-input" class="user-data__input mb-4" placeholder="Имя">
    <input type="text" id="small-input" class="user-data__input mb-4" placeholder="Фамилия">
    <input type="email" id="small-input" class="user-data__input mb-4" placeholder="Почта">
    <input type="text" id="small-input" class="user-data__input mb-4" placeholder="Номер билета">
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
}
.user-data__input {
  @apply block w-1/2 p-2 text-gray-900 rounded-xl bg-gray-50 text-xs;
}
.button-wrapper {
  @apply flex flex-row justify-end gap-4 ml-44;
}
</style>