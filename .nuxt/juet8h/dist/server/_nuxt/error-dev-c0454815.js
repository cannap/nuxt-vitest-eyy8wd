import { _ as _export_sfc, a as useHead } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ufo";
import "h3";
const errorDev_vue_vue_type_style_index_0_scoped_2c325f42_lang = "";
const _sfc_main = {
  __name: "error-dev",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 500
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
    },
    stack: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))} data-v-2c325f42><div class="fixed left-0 right-0 spotlight" data-v-2c325f42></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-2c325f42>${ssrInterpolate(__props.statusCode)}</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-2c325f42>${ssrInterpolate(__props.description)}</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-2c325f42><pre class="text-xl font-light leading-tight z-10 p-8" data-v-2c325f42>${__props.stack}</pre></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@1.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const errorDev = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c325f42"], ["__file", "/home/projects/nuxt-vitest-eyy8wd/node_modules/.pnpm/@nuxt+ui-templates@1.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
export {
  errorDev as default
};
//# sourceMappingURL=error-dev-c0454815.js.map
