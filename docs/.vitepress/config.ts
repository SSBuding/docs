import { defineConfig } from "vitepress";

// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  base: "/docs/",
  lang: "zh-CN",
  title: "米饭是菜",
  description:
    "bu_ding的前端之路,包含前端常用知识、框架学习笔记、算法知识、日常工具等",
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
