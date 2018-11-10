import { configure } from '@storybook/vue';

import "vuetify/dist/vuetify.css";
import "material-design-icons/iconfont/material-icons.css";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
// // import MyButton from "../src/stories/Button.vue";

Vue.use(Vuex);
Vue.use(Vuetify);


// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
