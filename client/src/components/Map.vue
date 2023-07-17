<template>
    <div class="map-container">
        <div style="height: 400px; width: 1000px; margin: 50px;" v-if="loading">Loading map...</div>
        <l-map v-else style="height: 400px; width: 1000px" :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="markerLatLng"></l-marker>
            <l-geo-json :visible="showRiversLayer" :geojson="geojson[0]" :options="riverOptions">
            </l-geo-json>
            <l-geo-json :visible="showRegionsLayer" :geojson="geojson[1]" :options="regionOptions">
            </l-geo-json>
            <l-geo-json :visible="showCrossbillsLayer" :geojson="geojson[2]" :options="regionOptions">
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
        showRiversLayer: Boolean,
        showRegionsLayer: Boolean,
        showCrossbillsLayer: Boolean
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
      loading: false,
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
        riverOptions() { 
            return { onEachFeature: this.onEachFeatureFunction, style: this.riverStyle }; 
        },
        regionOptions() {
            return { onEachFeature: this.onEachFeatureFunction, style: this.regionStyle }; 
        },
        riverStyle() { 
            const fillColor = this.fillColor;
            return () => { 
                return { 
                    weight: 2, 
                    color: "#2a74f5", 
                    opacity: 1, 
                    // fillColor: fillColor, 
                    fillOpacity: 1 
                }; 
            }; 
        },
        regionStyle() {
            const fillColor = this.fillColor;
            return () => { 
                return { 
                    weight: 2, 
                    color: "#32ad38", 
                    opacity: 1, 
                    // fillColor: fillColor, 
                    // fillOpacity: 1 
                }; 
            }; 
        },
        onEachFeatureFunction() { 
            return (feature, layer) => { 
                layer.bindPopup(this.formatPopup(feature.properties), {maxHeight: 200}); 
                // {"scalerank":0,"name":"MELANESIA","namealt":null,"region":"Oceania","subregion":"Melanesia","featureclass":"Island group"}
            };
        }
   },

   methods: {
        /**
         * Format the pop data as an html string
         */
        formatPopup(obj) {
          if (typeof obj == 'object') {
            let html = '<div>';
            for (let key in obj) {
              html += `<p>${key}: ${obj[key]}</p>`
            }
            html += '</div>'
            return html
          } else {
            return ''
          }
        }
   },

  async created() {
    this.loading = true;
    const response = await axios.get(process.env.VUE_APP_ENV == "development" ? process.env.VUE_APP_BASE_URL + "/api/points" : "/api/points");
    this.geojson = response.data;
    this.loading = false;
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

    .leaflet-popup-content-wrapper {
      max-height: 50px;
    }
</style>