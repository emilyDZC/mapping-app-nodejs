<template>
  <div id="app">
    <h1>Mapping app</h1>
    <div class="main-container">
      <h4>This map displays three different layers:</h4>
      <div class="text-container">
        <ul>
          <li>Layer 1 shows river centerlines around the world</li>
          <li>Layer 2 shows the geographical regions of the world</li>
          <li>Layer 3 shows the results of a national survey of Scottish Crossbills, dataset from https://www.gbif.org/</li>
        </ul>
      </div>
    </div>
    <div class="buttons-container">
      <Button :text="showRiversLayer ? 'Hide rivers' : 'Show rivers'" @click="showRiversLayer = !showRiversLayer"/>
      <Button :text="showRegionsLayer ? 'Hide regions' : 'Show regions'" @click="showRegionsLayer = !showRegionsLayer"/>
      <Button :text="showCrossbillsLayer ? 'Hide Scottish Crossbills (UK only)' : 'Show Scottish Crossbills (UK only)'" @click="showCrossbillsLayer = !showCrossbillsLayer"/>
    </div>
    <Map :showRegionsLayer="showRegionsLayer" :showRiversLayer="showRiversLayer" :showCrossbillsLayer="showCrossbillsLayer"/>
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
      showRegionsLayer: false,
      showCrossbillsLayer: false
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

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-container {
  text-align: left;
  border: 1px solid gray;
  padding: 5px;
  padding-right: 15px;
  margin-bottom: 10px;
}
</style>
