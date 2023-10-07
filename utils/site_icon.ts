import Cat_1 from "~/assets/icon/cat_1.jpg";
import Cat_2 from "~/assets/icon/cat_2.jpg";
import Cat_3 from "~/assets/icon/cat_3.jpg";
import Cat_4 from "~/assets/icon/cat_4.jpg";
import Cat_5 from "~/assets/icon/cat_5.jpg";
import Cat_6 from "~/assets/icon/cat_6.jpg";

const icons = [Cat_1, Cat_2, Cat_3, Cat_4, Cat_5, Cat_6];

const getBase64 = (index: number): Promise<string> => {
  return new Promise((resolve) => {
    fetch(icons[index])
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
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
  }, 300)
};

export default { init };
