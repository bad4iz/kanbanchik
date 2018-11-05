<template lang="pug">
v-speed-dial(
      v-model="fab"
      top
      right
      direction="right"
      open-on-hover
      :transition="transition"
)
    v-btn(slot="activator" v-model="fab" 
        color="blue darken-2" dark
        fab)
        v-icon reorder
        v-icon close
    slot
   
</template>

<script>
  export default {
    data: () => ({
      transition: 'slide-x-transition',
      fab: false
    }),
  }
</script>
