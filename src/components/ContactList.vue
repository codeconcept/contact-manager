<template>
  <div>
    <ul>
      <li v-for="contact in contacts" :key="contact.data().id">
        {{contact.data().firstName}} {{contact.data().lastName}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['contacts'],
};
</script>

<style>
</style>
