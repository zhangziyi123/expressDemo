<template>
<div id="mapPanel" class="mapPanel">
  <layer-manage :layers="layers"></layer-manage>
  <style-manage></style-manage>
</div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import layermanage from "./layerManage/layermanage.vue";
import stylemanage from "./styleManage/stylemanage.vue";
export default {
  components: {
    'layer-manage': layermanage,
    'style-manage': stylemanage
  },
  data() {
    return {
      layers: null
    }
  },
  mounted() {
    let _this = this;
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZmFrZSIsImEiOiJjajR0YWVjcGEwMG03MnFwMmpoNmp6cTV5In0.SlARU085R1d1ns5JxmLOUw';
    const map = new mapboxgl.Map({
      container: 'mapPanel',
      zoom: 3,
      center: [120, 23],
      style: 'mapbox://styles/mapbox/streets-v9',
      touchZoomRotate: true, // 启用“捏合旋转和缩放” 交互 ??? 没感觉出来效果
      bearing: 0, // 地图的初始方位角（旋转度），以正北方的逆时针转动度数计量。 ??? 水平？？？ 移动端或支持多点触控设备来旋转地图角度
      pitch: 15 // 倾斜度
      // renderWorldCopies: false
    })
    map.on('load', function () {
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl(), 'top-left');
      map.addControl(new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'metric'
      }));

      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        }
      }));

      map.addControl(new mapboxgl.FullscreenControl());
      var marker = new mapboxgl.Marker().setLngLat([120, 23]).addTo(map);


      map.addSource('some id', {
        type: 'geojson',
        data: {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                120.22,
                30.2
              ]
            }
          }]
        }
      });

      map.addLayer({
        'id': 'urban-areas-fill',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'
        },
        'layout': {},
        'paint': {
          'fill-color': '#f08',
          'fill-opacity': 0.4
        }
        // This is the important part of this example: the addLayer
        // method takes 2 arguments: the layer as an object, and a string
        // representing another layer's name. if the other layer
        // exists in the stylesheet already, the new layer will be positioned
        // right before that layer in the stack, making it possible to put
        // 'overlays' anywhere in the layer stack.
      }, 'water');


      let pointsLayer = {
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [121, 38.913188059745586]
              },
              "properties": {
                "title": "Mapbox DC",
                "icon": "monument"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [122.414, 37.776]
              },
              "properties": {
                "title": "Mapbox SF",
                "icon": "harbor"
              }
            }]
          }
        },
        "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      }
      _this.layers = [];
      _this.layers.push(pointsLayer);
      map.addLayer(pointsLayer);
    })
  }
}
</script>

<style>
.mapPanel{ position:absolute; top:0; bottom:0; left:10.5%; width:89.5%; height:100%; }
.mapPanel .mapboxgl-canvas-container{
  position:absolute;
}
</style>
