<template>
  <div>
    <contact-details
      :contact='contact'
      v-for="contact in contacts"
      @deleteContact="deleteContact"
      @saveEdit="saveEdit"
      :key="contact.data().id">
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
    saveEdit(editedContact) {
      this.$emit('saveEdit', editedContact);
    },
  },
};
</script>

<style>
</style>
