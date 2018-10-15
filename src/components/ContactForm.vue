<template>
  <form @submit.prevent="createContact">
    <input type="text" v-model="contact.firstName" id="firstName" placeholder="prénom"><br>
    <input type="text" v-model="contact.lastName" id="lastName" placeholder="nom"><br>
    <input type="text" v-model="contact.email" id="email" placeholder="email"><br>
    <input type="text" v-model="contact.phone" id="phone" placeholder="téléphone"><br>
    <button type="submit">créer</button>
  </form>
</template>

<script>
import db from '../shared/db';

export default {
  data() {
    return {
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    createContact() {
      db.create(this.contact)
        .then((data) => {
          console.log(data);
          this.$emit('created', data.id);
          this.resetForm();
        })
        .catch(err => console.log(err));
    },
    resetForm() {
      this.contact.firstName = '';
      this.contact.lastName = '';
      this.contact.email = '';
      this.contact.phone = '';
    },
  },
};
</script>

<style>
</style>
