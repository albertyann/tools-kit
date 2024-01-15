<script setup lang="ts">
import { BrandGithub, BrandTwitter, InfoCircle, Moon, Sun } from '@vicons/tabler';
import { useStyleStore } from '@/stores/style.store';

const styleStore = useStyleStore();
const { isDarkTheme } = toRefs(styleStore);
</script>

<template>
  <!-- <c-tooltip :tooltip="$t('home.nav.github')" position="bottom">
    <c-button
      circle
      variant="text"
      href="https://github.com/CorentinTh/it-tools"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="$t('home.nav.githubRepository')"
    >
      <n-icon size="25" :component="BrandGithub" />
    </c-button>
  </c-tooltip> -->

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

  <!-- <c-tooltip :tooltip="$t('home.nav.about')" position="bottom">
    <c-button circle variant="text" to="/about" :aria-label="$t('home.nav.aboutLabel')">
      <n-icon size="25" :component="InfoCircle" />
    </c-button>
  </c-tooltip> -->
</template>

<style lang="less" scoped>
.n-button {
  &:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
