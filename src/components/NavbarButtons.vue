<script setup lang="ts">
import { BrandTwitter } from '@vicons/tabler';

</script>

<template>
  <c-tooltip :tooltip="$t('home.nav.twitter')" position="bottom">
    <c-button
      circle
      variant="text"
      href="https://twitter.com/albertyann"
      rel="noopener"
      target="_blank"
      :aria-label="$t('home.nav.twitterAccount')"
    >
      <n-icon size="25" :component="BrandTwitter" />
    </c-button>
  </c-tooltip>
</template>

<style lang="less" scoped>
.n-button {
  &:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
