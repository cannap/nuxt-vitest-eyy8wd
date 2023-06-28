import { unref, mergeProps, useSSRContext, defineAsyncComponent } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ufo";
import "h3";
const _sfc_main = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const { error } = __props;
    const stacktrace = (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = error.message || error.toString();
    const stack = !is404 ? error.description || `<pre>${stacktrace}</pre>` : void 0;
    const _Error404 = /* @__PURE__ */ defineAsyncComponent(() => import("./error-404-5127650a.js").then((r) => r.default || r));
    const _Error = /* @__PURE__ */ defineAsyncComponent(() => import("./error-dev-c0454815.js").then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.4.3_@types+node@18.16.3/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nuxtErrorPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/projects/nuxt-vitest-eyy8wd/node_modules/.pnpm/nuxt@3.4.3_@types+node@18.16.3/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
export {
  nuxtErrorPage as default
};
//# sourceMappingURL=error-component-cf442425.js.map
