import{_ as m,o as x,c as g,n as E,g as f,u as s,d as n,a}from"./entry.95e1ff9b.js";const k={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c,u=(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`),o=Number(t.statusCode||500),r=o===404,p=t.statusMessage??(r?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),d=r?void 0:t.description||`<pre>${u}</pre>`,_=r?n(()=>a(()=>import("./error-404.d3e2c7a1.js"),["./error-404.d3e2c7a1.js","./entry.95e1ff9b.js","./entry.9cf967ba.css","./error-404.0eaa811f.css"],import.meta.url).then(e=>e.default||e)):n(()=>a(()=>import("./error-dev.1f1a02b4.js"),["./error-dev.1f1a02b4.js","./entry.95e1ff9b.js","./entry.9cf967ba.css","./error-dev.213b83bf.css"],import.meta.url).then(e=>e.default||e));return(e,l)=>(x(),g(s(_),E(f({statusCode:s(o),statusMessage:s(p),description:s(i),stack:s(d)})),null,16))}},j=m(k,[["__file","/home/projects/nuxt-vitest-eyy8wd/node_modules/.pnpm/nuxt@3.4.3_@types+node@18.16.3/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);export{j as default};
//# sourceMappingURL=error-component.ed2e229a.js.map