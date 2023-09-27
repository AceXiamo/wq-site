import { h, render } from "vue";
import Loading from "~/framework/Loading/Loading.vue";

const show = (options: {
  isFull?: boolean;
  element?: string;
  hasBg?: boolean;
}): {
  close: () => void;
} => {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = "0";
  div.style.left = "0";
  div.style.width = "100%";
  div.style.height = "100%";
  div.style.zIndex = "9999";
  const vNode = h(Loading, {
    close: () => {
      div.remove();
    },
    hasBg: options.hasBg,
  });
  vNode.appContext = useNuxtApp().vueApp._context;
  render(vNode, div);

  if (options.element) {
    const target = document.querySelector(options.element);
    if (target) {
      target.appendChild(div);
    }
  } else {
    document.body.appendChild(div);
  }
  return {
    close: vNode.component?.exposed?.close,
  };
};

export default { show };
