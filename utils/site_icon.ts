import Cat_1 from "~/assets/icon/cat_1.png";
import Cat_2 from "~/assets/icon/cat_2.png";
import Cat_3 from "~/assets/icon/cat_3.png";
import Cat_4 from "~/assets/icon/cat_4.png";
import Cat_5 from "~/assets/icon/cat_5.png";
import Cat_6 from "~/assets/icon/cat_6.png";

const icons = [Cat_1, Cat_2, Cat_3, Cat_4, Cat_5, Cat_6];
const iconMap = new Map<number, string>();

const getBase64 = (index: number): Promise<string> => {
  return new Promise((resolve) => {
    if (iconMap.has(index)) {
      resolve(iconMap.get(index)!);
      return;
    }
    fetch(icons[index])
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          iconMap.set(index, String(base64Data));
          resolve(String(base64Data));
        };
        reader.readAsDataURL(blob);
      });
  });
};

let flag = true, index = 0
const getIndex = () => {
  if (flag) {
    index++
    if (index >= icons.length - 1) flag = false
  } else {
    index--
    if (index <= 0) flag = true
  }
  return index
};

const init = () => {
  setInterval(() => {
    getBase64(getIndex()).then(base64 => {
      const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = base64;
      document.getElementsByTagName("head")[0].appendChild(link);
    });
  }, 240)
};

export default { init };
