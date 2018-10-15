<template>
  <div class="card" style="width: 18rem;margin-bottom: 10px;">
    <div class="card-body">
      <h5 class="card-title">{{contact.data().lastName}} {{contact.data().firstName}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{contact.data().email}}</h6>
      <p class="card-text">numéro de téléphone : {{contact.data().phone}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contact'],
};
</script>

<style>
</style>
