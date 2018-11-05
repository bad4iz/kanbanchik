<template lang="pug">
div {{subcards}}
  v-btn(absolute bottom color="success" right fab @click="addCard(id)")
    v-icon add
  .subcards(v-if="subcards.length")
    .i(v-for="(item) in subcards" v-bind:key="item")
      card(:id="item")
  //- card(:id="")
</template>

<script>
import { mapGetters } from 'vuex'

import Card from '@/components/Card.vue';

export default {
  name: 'CardContainer',
  props: ['subcards'],
  components:{
    Card
  },
  data() {
    return {
      // card: getCard(0)
    };
  },
  computed: {
    ...mapGetters([
      // Mounts the "card" getter to the scope of your component.
      'getList',
      'getCard'
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
