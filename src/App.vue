<template>
    <v-app id='app' :dark="darkTheme">
      <v-toolbar color="primary">
            <v-switch
              color="indigo"
              :label="`Dark theme: ${darkTheme.toString()}`"
              v-model="darkTheme"
            ></v-switch>
      </v-toolbar>

      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <v-layout>
        <router-view/>
      </v-layout>

    </v-app>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: true,
    };
  },
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
