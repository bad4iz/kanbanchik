<template lang="pug">
v-card
  v-toolbar(color="cyan") 
    v-toolbar-title {{card.value}} card
      v-btn(absolute bottom color="success" right fab @click="addCard(id)")
        v-icon add
  v-card-title 
    div 
  card-container(:subcards="card.subcards") 

      
</template>

<script>
import { mapActions } from 'vuex';
// import CardContainer from './CardContainer'

export default {
  props: {
    id: {
      type: Number,
      default: 1,
    }
  },
  components: {
    CardContainer:  () => import('./CardContainer')
  },
  data() {
    return {
      card: this.$store.getters.getCard(this.id)
    };
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
  min-height: 100xp;
  // max-width: 500px;
}
.subcards {
  display: flex;
  height: 100px;
  Justify-content: space-around;
}
</style>
