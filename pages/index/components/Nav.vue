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
    label: "动态",
    icon: "i-heroicons-home",
  },
  {
    label: "直播回放",
    icon: 'i-heroicons-play-circle',
    badge: 0,
    to: "",
  },
  {
    label: "Another 1.",
    icon: "i-heroicons-chart-bar",
  },
  {
    label: "Another 2.",
    icon: "i-heroicons-command-line",
  },
]);

watchEffect(() => {
  links.value[1].badge = props.liveRecCount;
})
</script>
