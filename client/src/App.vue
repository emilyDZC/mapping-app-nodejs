<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="button-container">
      <button class="show-layer-button" @click="showLayer = !showLayer">{{showLayer ? "Hide countries layer" : "Show countries layer"}}</button>
    </div>
    <Map :showLayer="showLayer"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Map
  },
  data() {
    return {
      showLayer: false
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.show-layer-button {
  padding: 8px;
  background-color: rgb(110, 241, 198);
  cursor: pointer;
  border-radius: 5px;
  border-color:rgb(96, 170, 145);
  box-shadow: 2px;
  transition: 0.3s;
  font-size: 14px;
  font-weight: 600;
}

.show-layer-button:hover {
  background-color: rgb(96, 196, 161);
  transition: 0.3s;

}

.button-container {
  margin-bottom: 20px;
}
</style>
