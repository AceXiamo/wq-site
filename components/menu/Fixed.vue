<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-[10]"
    @click="close"
    v-motion="`fixedMenu`"
    :initial="{
      opacity: 0,
      x: 5,
    }"
    :enter="{
      opacity: 1,
      x: 0,
      transition: {
        duration: 200,
        ease: `easeIn`,
      },
    }"
    :leave="{
      opacity: 0,
      x: 5,
      transition: {
        duration: 200,
        ease: `easeIn`,
      },
    }"
    v-if="menu.fixedOpen"
  >
    <div :class="[`h-full w-[220px] bg-[#EBF2ED] flex flex-col`, `dark:bg-[#101224]`]" @click.stop>
      <div class="p-[30px_30px_0_30px]">
        <WQAvatar :size="50" />
      </div>
      <div class="flex flex-col gap-[20px] mt-[50px]">
        <div
          :class="[
            `relative px-[30px]`,
            menu.active === item.value && `text-emerald-600`,
            menu.active === item.value && `dark:text-blue-700`,
            menu.active === item.value &&
              `after:absolute after:right-0 after:top-0 after:h-full after:w-[2px] after:bg-emerald-500 dark:after:bg-blue-700`,
          ]"
          v-for="(item, index) in menu.menus"
          :key="index"
          @click="menuClick(item)"
        >
          <Text ref="text_sec" class="cursor-default" :icon="item.icon" :text="item.title"></Text>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore, Menu } from '@/store/menu';
import { emojis } from '@/utils/common';
import { useMotions } from '@vueuse/motion';

const menu = useMenuStore();
const toast = useToast();
const router = useRouter();
const fixed = ref();
const motions = useMotions();

const menuClick = (item: Menu) => {
  if (item.url.startsWith('http')) {
    window.open(item.url, '_blank');
  } else if (item.url === 'dev') {
    toast.add({
      title: '🧱 Tip',
      description: `待定喵. ${emojis[Math.floor(Math.random() * emojis.length)]}`,
    });
  } else {
    close()
    menu.active = item.value;
    router.push(item.url);
  }
};

const close = () => {
  motions['fixedMenu']?.leave(() => {
    menu.fixedOpen = false;
  });
};
</script>
