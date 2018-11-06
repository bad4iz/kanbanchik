<template lang="pug">
v-card
  v-toolbar(color="cyan")
    speed-dial
      v-btn(fab small color="indigo" @click="addCard(id)")
        v-icon add
      v-btn(fab small color="red")
        v-icon delete
      v-btn(fab small color="green")
        v-icon edit
    v-toolbar-title {{card.value}} card
  v-card-text
    div {{getScore(id)}}
    card-container(:subcards="card.subcards")
  v-card-actions
    v-btn( icon @click="increment(id)")
      v-icon exposure_plus_1
    v-btn( icon)
      v-icon favorite
    v-btn( icon @click="decrement(id)")
      v-icon exposure_neg_1
    v-spacer

    v-btn( icon)
      v-icon bookmark
    v-btn( icon)
      v-icon share

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SpeedDial from './SpeedDial';


export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  components: {
    CardContainer: () => import('./CardContainer'),
    SpeedDial,
  },
  data() {
    return {
      card: this.$store.getters.getCard(this.id),
    };
  },
  methods: {
    ...mapActions([
      'addCard', // проксирует `this.addCard()` в `this.$store.dispatch('addCard')`
      'increment',
      'decrement',
      'deleteCard'
    ]),
  },
   computed: {
    ...mapGetters([
      // Mounts the "card" getter to the scope of your component.
      'getScore',
      'getCard'
    ])
  },
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
.v-card-text{
  height: 100%;
}
</style>
