/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from '../src/components/HelloWorld';
// import Welcome from './Welcome';
import Card from '../src/components/Card';
import CardContainer from '../src/components/CardContainer';




storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Cards', module)
.add('card empty', () => ({
  components: { Card },
  template: '<card :showApp="action" />',
  methods: { action: linkTo('Button') },
}));


storiesOf('CardContainer', module)
.add('Container empty', () => ({
  components: { CardContainer },
  template: '<card-container :showApp="action" />',
  methods: { action: linkTo('Button') },
}))
.add('Container with card', () => ({
  components: { CardContainer, Card },
  template: '<card-container><card/></card-container>',
  methods: { action: linkTo('Button') },
}));



storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

/* eslint-enable react/react-in-jsx-scope */
