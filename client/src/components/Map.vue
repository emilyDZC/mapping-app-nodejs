<template>
    <div class="map-container">
        <l-map style="height: 400px; width: 1000px" :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="markerLatLng"></l-marker>
            <l-geo-json :visible="showLayer" :geojson="geojson" :options="options">
            </l-geo-json>
        </l-map>
    </div>
</template>

<script>
import {LMap, LTileLayer, LMarker, LGeoJson, LPopup} from 'vue2-leaflet';
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
    props: {
        showLayer: Boolean
    },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LGeoJson,
    LPopup
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 5,
      center: [53.383026, -1.505438],
      markerLatLng: [53.383026, -1.505438],
      data: [],
      geojson: null,
      fillColor: "#e4ce7f"
    };
  },

   computed: { 
        options() { 
            return { onEachFeature: this.onEachFeatureFunction }; 
        }, 
        styleFunction() { 
            const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor 
            return () => { 
                return { 
                    weight: 2, 
                    color: "#ECEFF1", 
                    opacity: 1, 
                    fillColor: fillColor, 
                    fillOpacity: 1 
                }; 
            }; 
        }, 
        onEachFeatureFunction() { 
            return (feature, layer) => { 
                layer.bindPopup(feature.properties.ADMIN); 
                // layer.bindTooltip(feature.properties.ADMIN, { permanent: false, sticky: false } ); 
            };
        }
   },
  async created() {
    
    const response = await axios.get(process.env.VUE_APP_ENV == "development" ? process.env.VUE_APP_BASE_URL + "/api/points" : "/api/points");
    this.geojson = response.data;
  },

}
</script>

<style scoped>
    .map-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 8px solid rgb(88, 190, 170);
        width: 1000px;
        margin: 0 auto;
    }
</style>