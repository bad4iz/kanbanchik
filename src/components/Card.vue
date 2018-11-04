<template lang="pug">
v-card
  v-toolbar(color="cyan")
    v-btn(absolute bottom color="success" right fab @click="addCard(id)")
      v-icon add
    //- v-toolbar-side-icon
    v-toolbar-title card value: {{card.value}}
  .title 
  .subcards(v-if="card.subcards")
    .i(v-for="(item) in card.subcards" v-bind:key="item.id")
      card(:id="item")
      
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Card',
  props: ['id'],
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
