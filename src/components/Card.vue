<template lang="pug">
v-card
  v-toolbar(color="cyan")
    v-toolbar-title card
  v-card-title 
    div {{card.value}}
      
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: Number,
      default: 1,
    }
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
}
.subcards {
  display: flex;
  height: 100px;
  Justify-content: space-around;
}
</style>
