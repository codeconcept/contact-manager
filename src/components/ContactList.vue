<template>
  <div>
    <ul>
      <li v-for="contact in contacts" :key="contact.data().id">
        {{contact.data().firstName}} {{contact.data().lastName}}
        <button @click="deleteContact(contact)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['contacts'],
  methods: {
    deleteContact(contact) {
      this.$emit('deleteContact', contact);
    },
  },
};
</script>

<style>
</style>
