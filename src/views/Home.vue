<template lang="pug">
  v-flex(xs12 sm10 offset-sm1)
    //- card(:id="1")
    card-container(:subcards="[1]")
    card-container(:subcards="[1]")
      
    </v-container>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card';
import CardContainer from '@/components/CardContainer';

export default {
  name: 'home',
  components: {
    Card,
    CardContainer
  },
};
</script>
