<template>
  <div class="dashboard-font" style="line-height: 36px;">
    <div>
      <label>{{$parent.locale["heading"]}}:</label>
      <button v-for="h in 6" type="button" @click="setHeading(h)" :key="h">H{{h}}</button>
    </div>
    <div>
      <label>
        {{$parent.locale["font name"]}}:
      </label>
      <button v-for="name in nameList" type="button" @click="setFontName(name)" :key="name">{{name}}</button>
    </div>
    <div>
      <label>
        {{$parent.locale["font size"]}}:
      </label>
      <button v-for="size in fontSizeList" type="button" @click="setFontSize(size)" :key="size">{{size}}</button>
    </div>
    <div>
      <label>
        {{$parent.locale["line height"]}}:
      </label>
      <button v-for="lh in lineHeightList" type="button" @click="setLineHeight(lh)" :key="lh">
        {{lh}}
      </button>
    </div>
  </div>
</template>
<script>
  import Command from '../../range/command'
  /**
   * Created by peak on 2017/2/10.
   */
  export default {
    data() {
      return {
        nameList: [
          'Microsoft YaHei',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Verdana',
          'Georgia',
          'Times New Roman',
          'Trebuchet MS',
          'Microsoft JhengHei',
          'Courier New',
          'Impact',
          'Comic Sans MS',
          'Consolas'
        ],
        lineHeightList: [
          '1.0', '1.2', '1.5', '1.8', '2.0', '2.5', '3.0'
        ],
        fontSizeList: [
          '5pt', '5.5pt', '6.5pt', '7.5px', '9pt', '10.5pt', '12pt', '14pt', '15pt', '16pt', '18pt', '22pt', '24pt', '26pt', '36pt', '42pt'
        ]
      }
    },
    methods: {
      setFontName(name) {
        this.$parent.execCommand('fontName', name)
      },
      setFontSize(size) {
        this.$parent.execCommand('fontSize', size)
      },
      setHeading(heading) {
        this.$parent.execCommand('formatBlock', `h${heading}`)
      },
      setLineHeight(lh) {
        this.$parent.execCommand(Command.LINE_HEIGHT, lh)
      }
    },
    created() {
      const config = this.$options.module.config
      // font name
      if (!config) {
        return
      }
      if (Array.isArray(config.fontNames)) {
        this.nameList = config.fontNames
      }
    }
  }
</script>
