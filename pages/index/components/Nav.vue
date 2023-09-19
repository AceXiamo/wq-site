<template>
  <UVerticalNavigation :links="links" />
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    liveRecCount?: number;
  }>(),
  {
    liveRecCount: 0,
  }
);

const links = ref([
  {
    label: "Live Record",
    avatar: {
      src: "",
    },
    badge: 0,
    to: "https://axm.moe",
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
]);

watchEffect(() => {
  links.value[0].badge = props.liveRecCount;
})
</script>
