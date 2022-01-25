<template>
  <div class="error-404">
    <div class="error-code">404</div>
    <div class="error-message">Page Not Found</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error-404 {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  /* background: rgb(20, 16, 16); */
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.error-404 .error-code {
  color: rgb(146, 52, 52);
  font-size: 145px;
}
</style>
