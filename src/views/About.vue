<template>
  <div class="about">
    <h1>This is an about page</h1>
    <speed-dial>
         <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
    <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
    </speed-dial>

  
  </div>
</template>
<script>
import SpeedDial from '@/components/SpeedDial'
export default {
  components: {
    SpeedDial
  }
}
</script>
