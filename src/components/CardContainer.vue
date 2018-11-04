<template lang="pug">
v-card
  v-toolbar(color="cyan")
    v-btn(absolute bottom color="success" right fab )
      v-icon add
    //- v-toolbar-side-icon
    v-toolbar-title container
    //- v-spacer


  v-card-title(primary-title)
    .headline aaa 
  
    //- v-tooltip(top)
    //-   v-btn(absolute fab color="success" slot="activator")
    //-     v-icon add
      span add card
    //- slot

  //- div( v-if="card.subcards")
  //-   ul
  //-     li( v-for="(item) in card.subcards" v-bind:key="item.id")
  //-                 {{ item }}
  //-       card( v-bind:id="item")
  card(:id="1")
</template>

<script>
import { mapGetters } from 'vuex'


import Card from './Card';

export default {
  components:{
    Card
  },
  data() {
    return {
      // card: getCard(0)
    };
  },
  name: 'CardContainer',
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
