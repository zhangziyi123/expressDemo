<template>
  <div class="content-wrapper">
    <transition name="content" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "mainContent"
};
</script>
