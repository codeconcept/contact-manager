<template>
  <div>
    <router-link to="/" exact>Accueil</router-link> |
    <router-link to="/contact">Contact</router-link>
    <br><br>
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active {
  color: orange;
}
</style>
