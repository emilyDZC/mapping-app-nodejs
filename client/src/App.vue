<template>
  <div id="app">
    <h1>Mapping app</h1>
    <Button :text="showRiversLayer ? 'Hide rivers' : 'Show rivers'" @click="showRiversLayer = !showRiversLayer"/>
    <Button :text="showRegionsLayer ? 'Hide regions' : 'Show regions'" @click="showRegionsLayer = !showRegionsLayer"/>
    <Map :showRegionsLayer="showRegionsLayer" :showRiversLayer="showRiversLayer"/>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Map, Button
  },
  data() {
    return {
      showRiversLayer: false,
      showRegionsLayer: false
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
