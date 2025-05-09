<template>
  <div id="app">
    <router-view></router-view>
    <!-- Es necesario indicar tb en App.vue ya que aqui se renderizan los componentes de las rutas -->
  </div>
</template>

<script setup>
import Home from "./views/Home.vue";
</script>

<style scoped></style>
