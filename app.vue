<template>
  <RouterView></RouterView>
</template>

<style lang="less">
@font-face {
  font-family: "AllFont";
  // src: url("https://file.qwq.link/font/zzaw.woff2");
  src: url("https://file.qwq.link/font/InputMono-Regular.ttf");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "emoji-font";
  src: url("https://file.qwq.link/font/seguiemj.ttf");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

*:not([class*="icon"]):not(i) {
  font-family: "AllFont", "emoji-font";
}

/* hide scroll */
.hide-scroll {
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
