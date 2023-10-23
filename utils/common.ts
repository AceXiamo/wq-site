// dynamic title change
export const setTitle = (title: string) => {
  document.title = `${title}`;
};

// dynamic icon change
export const setIcon = (icon: string) => {
  const link = document.querySelector("link[rel*='icon']");
  if (link) {
    link.setAttribute("href", icon);
  } else {
    const newLink = document.createElement("link");
    newLink.setAttribute("rel", "icon");
    newLink.setAttribute("href", icon);
    document.head.appendChild(newLink);
  }
}
