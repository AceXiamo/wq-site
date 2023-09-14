<template>
  <UVerticalNavigation :links="links" />
</template>

<script lang="ts" setup>
const links = [
  {
    label: "Live Record",
    avatar: {
      src: "https://axm.moe/avatar",
    },
    badge: 100,
    to: "https://axm.moe"
  },
  {
    label: "Installation",
    icon: "i-heroicons-home",
  },
  {
    label: "Vertical Navigation",
    icon: "i-heroicons-chart-bar",
  },
  {
    label: "Command Palette",
    icon: "i-heroicons-command-line",
  },
];
</script>
