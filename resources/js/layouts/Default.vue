<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="content-wrapper">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>

<style>
</style>
