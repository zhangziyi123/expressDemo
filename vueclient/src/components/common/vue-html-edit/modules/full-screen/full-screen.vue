<template>
  <div></div>
</template>

<script>
  export default {
    name: 'full-screen',
    icon: 'fa fa-arrows-alt',
    i18n: 'full screen',
    handler(editor) {
      editor.toggleFullScreen()
    }
  }
</script>
