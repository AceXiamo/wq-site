<template>
  <div class="flex flex-col">
    <div class="mt-[20px] text-[13px] flex items-center gap-[5px]">
      <UIcon name="i-heroicons-server-stack" color="white" size="15" />
      <span>Disk</span>
      <div class="ml-auto flex items-end gap-[3px]">
        <span class="text-[15px]">19</span>
        <span class="text-[12px] text-gray-500">/</span>
        <span class="text-[12px] text-gray-500">100</span>
      </div>
    </div>
    <div class="mt-[10px]">
      <div
        :class="[
          ``,
          `rounded-md h-[5px] bg-gray-500 bg-opacity-20 relative z-1 w-full`,
        ]"
      >
        <div
          style="
            background-color: #ffffff00;
            opacity: 1;
            background-size: 4px 4px;
            background-image: repeating-linear-gradient(
              45deg,
              #4054ef 0,
              #4054ef 2px,
              #ffffff00 0,
              #ffffff00 50%
            );
          "
          class="left-0 top-0 absolute h-[5px] w-[20%] rounded-md"
        ></div>
      </div>
    </div>
  </div>
</template>

