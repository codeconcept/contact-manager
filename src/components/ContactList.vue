<template>
  <div>
    <contact-details :contact='contact' v-for="contact in contacts" :key="contact.data().id">
    </contact-details>
  </div>
</template>

<script>
import ContactDetails from './ContactDetails.vue';

export default {
  props: ['contacts'],
  components: {
    ContactDetails,
  },
  methods: {
    deleteContact(contact) {
      this.$emit('deleteContact', contact);
    },
  },
};
</script>

<style>
</style>
