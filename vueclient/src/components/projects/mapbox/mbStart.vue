<template>
<div id="mapPanel" class="mapPanel"></div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
export default {
  data() {
    return {}
  },
  mounted() {
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
  }
}
</script>

<style>
.mapPanel{ position:absolute; top:0; bottom:0;left: 10.5%; width:89.5%;height:100%; }
.mapPanel .mapboxgl-canvas-container{
  position:absolute;
}
</style>
