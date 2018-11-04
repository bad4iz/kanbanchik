<template lang="pug">
v-card
  v-toolbar(color="cyan")
    v-btn(absolute bottom color="success" right fab )
      v-icon add
    //- v-toolbar-side-icon
    v-toolbar-title container
    //- v-spacer


  v-card-title(primary-title)
    .headline container 

    //- v-tooltip(top)
    //-   v-btn(absolute fab color="success" slot="activator")
    //-     v-icon add
      span add card
    //- slot
  div( v-if="card.subcards")
    ul
      li( v-for="(item) in card.subcards" v-bind:key="item.id")
                  {{ item }}
        card( v-bind:id="item")

</template>

<script>
import Card from './Card';

export default {
  components:{
    Card
  },
  name: 'CardContainer',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
