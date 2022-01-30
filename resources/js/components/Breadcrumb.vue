<template>
  <div>
    <ol class="breadcrumb float-sm-right">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item active">{{ $route.meta.title }}</li>
    </ol>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
