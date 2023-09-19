<template>
  <RouterView></RouterView>
</template>

<style>
@font-face {
  font-family: "AllFont";
  src: url("https://alioss.xiamoqwq.com/font/web_font.woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "emoji-font";
  src: url("https://alioss.xiamoqwq.com/font/seguiemj.ttf");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

*:not([class*="icon"]):not(i) {
  font-family: "AllFont", "emoji-font";
}
</style>
