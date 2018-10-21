<template>
  <div id="app">
    <contact-form @created="created"></contact-form>
    <br>
    <contact-list
      :contacts="contacts"
      @deleteContact="deleteContact"
      @saveEdit="saveEdit">
    </contact-list>
    <router-view/>
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
    created(id) {
      console.log(id);
      this.getAllContacts();
    },
    getAllContacts() {
      db.read().then((snapshot) => {
        this.contacts = snapshot.docs;
      });
    },
    deleteContact(contact) {
      db.delete(contact.id).then(() => {
        this.getAllContacts();
      });
    },
    saveEdit(editedContact) {
      db.update(editedContact).then(() => {
        this.getAllContacts();
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
