<template>
  <div></div>
</template>

<script>
  export default {
    name: 'hr',
    icon: 'fa fa-minus',
    i18n: 'hr',
    handler(editor) {
      editor.execCommand('insertHorizontalRule')
    }
  }
</script>
