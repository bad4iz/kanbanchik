<template lang="pug">
  .home
    img( alt="Vue logo" src="../assets/logo.png")
    card-container
      h3 slot
</template>

<script>
// @ is an alias to /src
import CardContainer from '@/components/CardContainer.vue';

export default {
  name: 'home',
  components: {
    CardContainer,
  },
};
</script>
