<template>
  <div id="app">
    <contact-form @created="getAllContacts"></contact-form>
    <contact-list :contacts="contacts"></contact-list>
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import ContactList from './components/ContactList.vue';
import db from './shared/db';

export default {
  name: 'app',
  components: {
    ContactForm,
    ContactList,
  },
  data() {
    return {
      contacts: [],
    };
  },
  created() {
    this.getAllContacts();
  },
  methods: {
    getAllContacts() {
      db.read().then((snapshot) => {
        this.contacts = snapshot.docs;
      });
    },
  },
  watch: {
    contacts(newContacts) {
      console.log('newContacts', newContacts);
      this.contacts = newContacts;
    },
  },
};
</script>

<style>
</style>
