<script>
  import {Leilao as LeilaoMixin} from '../src/index'
  import SimulaLance from './domain/simulaLance'

  export default {
    name: 'App',
    components: {},
    methods: {
      lance () {
        console.log('Simulação de Lance...')
        let lance = SimulaLance()
        this.onLance(lance)
      }
    },
    mixins: [
      LeilaoMixin
    ]
  }
</script>

<template>
  <div id="app">
    <div class="tests">
      <button @click="lance">Lance</button>
    </div>
    <div class="results">
      b
    </div>
  </div>
</template>

<style>
  body {
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
