<template>
  <div id="app">
    <contact-form></contact-form>
    <contact-list></contact-list>
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import ContactList from './components/ContactList.vue';

export default {
  name: 'app',
  components: {
    ContactForm,
    ContactList,
  },
};
</script>

<style>
</style>
