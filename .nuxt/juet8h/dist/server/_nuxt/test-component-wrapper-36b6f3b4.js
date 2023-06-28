import { parseURL } from "ufo";
import { defineComponent, h } from "vue";
import { parseQuery } from "vue-router";
import { resolve } from "pathe";
import { d as devRootDir } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "h3";
import "vue/server-renderer";
const testComponentWrapper = (url) => /* @__PURE__ */ defineComponent({
  name: "NuxtTestComponentWrapper",
  async setup(props, { attrs }) {
    const query = parseQuery(parseURL(url).search);
    const urlProps = query.props ? JSON.parse(query.props) : {};
    const path = resolve(query.path);
    if (!path.startsWith(devRootDir)) {
      throw new Error(`[nuxt] Cannot access path outside of project root directory: \`${path}\`.`);
    }
    const comp = await import(
      /* @vite-ignore */
      query.path
    ).then((r) => r.default);
    return () => [
      h("div", "Component Test Wrapper for " + query.path),
      h("div", { id: "nuxt-component-root" }, [
        h(comp, { ...attrs, ...props, ...urlProps })
      ])
    ];
  }
});
export {
  testComponentWrapper as default
};
//# sourceMappingURL=test-component-wrapper-36b6f3b4.js.map
