<template>
  <div class="hello">
    <img src="../assets/logo.png">

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <h2>Ecosystem</h2>
    <h3>{{arg}}</h3>
    <slot/>  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
