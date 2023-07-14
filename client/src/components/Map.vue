<template>
  <l-map style="height: 600px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
    <l-geo-json :geojson="geojson"></l-geo-json>
  </l-map>
</template>

<script>
import L from 'leaflet';
import {LMap, LTileLayer, LMarker, LGeoJson} from 'vue2-leaflet';
import axios from 'axios'
import { Icon } from 'leaflet';

// Fix icons not showing
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LGeoJson
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 10,
      center: [53.383026, -1.505438],
      markerLatLng: [53.383026, -1.505438],
      data: [],
      geojson: null
    };
  },

  async created() {
    const response = await axios.get("http://localhost:5001/api/points");
    this.geojson = response.data;
  },

}
</script>