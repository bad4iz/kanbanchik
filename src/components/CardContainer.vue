<template lang="pug">
v-container(v-if="subcards")
  //- select(v-model="currentOrder")
  //-   option(value='id') sort by id
  //-   option(value='value') sort by value
  //-   option(value='score') sort by score
  .text-xs-center
    v-chip( outline color="success" @click="setCurrentOrder('score')") sort score
    v-chip( outline color="primary" @click="setCurrentOrder('id')")  sort id
  v-layout(wrap v-if="subcards.length")

    
    v-flex(v-for="(item) in orderedItems()" v-bind:key="item.id")
      card(:id="item.id")
       
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
      currentOrder: 'id'
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
    setCurrentOrder(current){
      this.currentOrder = current;
    },
    orderedItems(){
      const arr = this.subcards.map(id => this.getCard(id));
        
      return arr.sort((a, b) => {
          return a[this.currentOrder]-b[this.currentOrder];
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-card {
  margin: 5px;
  min-height: 100px;
}
</style>
