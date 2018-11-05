<template lang="pug">
v-container(v-if="subcards")
  v-layout( v-layout row wrap v-if="subcards.length")
      v-flex(v-for="(item) in subcards" v-bind:key="item")
        card(:id="item")
       
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CardContainer',
  props: ['subcards'],
  components:{
    Card: () => import('./Card')
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      // Mounts the "card" getter to the scope of your component.
      'getList',
      'getCard'
    ])
  },
    methods: {
    ...mapActions([
      'addCard' // проксирует `this.addCard()` в `this.$store.dispatch('addCard')`

    ]),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-card {
  margin: 5px;
  min-height: 100px;
}
.subcards {
  // display: flex;
  // height: 100px;
  // Justify-content: space-around;
  // flex-flow: row wrap;
}
</style>
