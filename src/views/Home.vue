<template lang="pug">
  v-flex(xs12 sm10 offset-sm1)
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
