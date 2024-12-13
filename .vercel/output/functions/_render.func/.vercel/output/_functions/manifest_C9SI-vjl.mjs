import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_BWF5RzfA.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/about/about","isIndex":false,"type":"page","pattern":"^\\/about\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/about.md","pathname":"/about/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/certificates/1_playwright","isIndex":false,"type":"page","pattern":"^\\/certificates\\/1_Playwright\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"1_Playwright","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/1_Playwright.md","pathname":"/certificates/1_Playwright","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/certificates/2_seleniumjava","isIndex":false,"type":"page","pattern":"^\\/certificates\\/2_SeleniumJava\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"2_SeleniumJava","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/2_SeleniumJava.md","pathname":"/certificates/2_SeleniumJava","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/certificates/3_fundamentalswebdevelopment","isIndex":false,"type":"page","pattern":"^\\/certificates\\/3_FundamentalsWebDevelopment\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"3_FundamentalsWebDevelopment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/3_FundamentalsWebDevelopment.md","pathname":"/certificates/3_FundamentalsWebDevelopment","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/certificates/4_scrumfoundation","isIndex":false,"type":"page","pattern":"^\\/certificates\\/4_ScrumFoundation\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"4_ScrumFoundation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/4_ScrumFoundation.md","pathname":"/certificates/4_ScrumFoundation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/certificates/5_javascript","isIndex":false,"type":"page","pattern":"^\\/certificates\\/5_JavaScript\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"5_JavaScript","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/5_JavaScript.md","pathname":"/certificates/5_JavaScript","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/certificates/6_sqlserver","isIndex":false,"type":"page","pattern":"^\\/certificates\\/6_SQLServer\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"6_SQLServer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/6_SQLServer.md","pathname":"/certificates/6_SQLServer","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/contact/email","isIndex":false,"type":"page","pattern":"^\\/contact\\/email\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/email.md","pathname":"/contact/email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/contact/github","isIndex":false,"type":"page","pattern":"^\\/contact\\/github\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"github","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/github.md","pathname":"/contact/github","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/contact/linkedin","isIndex":false,"type":"page","pattern":"^\\/contact\\/linkedin\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"linkedin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/linkedin.md","pathname":"/contact/linkedin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/contact/whatsapp","isIndex":false,"type":"page","pattern":"^\\/contact\\/whatsapp\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"whatsapp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/whatsapp.md","pathname":"/contact/whatsapp","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/customers/customers","isIndex":false,"type":"page","pattern":"^\\/customers\\/customers\\/?$","segments":[[{"content":"customers","dynamic":false,"spread":false}],[{"content":"customers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/customers/customers.md","pathname":"/customers/customers","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/projects/1_apexcore","isIndex":false,"type":"page","pattern":"^\\/projects\\/1_ApexCore\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"1_ApexCore","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/1_ApexCore.md","pathname":"/projects/1_ApexCore","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/projects/2_chivowallet","isIndex":false,"type":"page","pattern":"^\\/projects\\/2_ChivoWallet\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"2_ChivoWallet","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/2_ChivoWallet.md","pathname":"/projects/2_ChivoWallet","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/projects/3_cap","isIndex":false,"type":"page","pattern":"^\\/projects\\/3_Cap\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"3_Cap","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/3_Cap.md","pathname":"/projects/3_Cap","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/projects/4_cignamedical","isIndex":false,"type":"page","pattern":"^\\/projects\\/4_CignaMedical\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"4_CignaMedical","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/4_CignaMedical.md","pathname":"/projects/4_CignaMedical","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/projects/5_americamobile","isIndex":false,"type":"page","pattern":"^\\/projects\\/5_AmericaMobile\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"5_AmericaMobile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/5_AmericaMobile.md","pathname":"/projects/5_AmericaMobile","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/studies/studie1","isIndex":false,"type":"page","pattern":"^\\/studies\\/studie1\\/?$","segments":[[{"content":"studies","dynamic":false,"spread":false}],[{"content":"studie1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studies/studie1.md","pathname":"/studies/studie1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/works/work1","isIndex":false,"type":"page","pattern":"^\\/works\\/work1\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work1.md","pathname":"/works/work1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/works/work2","isIndex":false,"type":"page","pattern":"^\\/works\\/work2\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work2.md","pathname":"/works/work2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/works/work3","isIndex":false,"type":"page","pattern":"^\\/works\\/work3\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work3.md","pathname":"/works/work3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"var u={exports:{}};(function(l,s){function n(){var t=document.querySelector(\"[data-toggle-theme]\"),e=t?t.getAttribute(\"data-key\"):null;(function(a=localStorage.getItem(e||\"theme\")){localStorage.getItem(e||\"theme\")&&(document.documentElement.setAttribute(\"data-theme\",a),t&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(o=>{o.classList.add(t.getAttribute(\"data-act-class\"))}))})(),t&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(a=>{a.addEventListener(\"click\",function(){var o=a.getAttribute(\"data-toggle-theme\");if(o){var c=o.split(\",\");document.documentElement.getAttribute(\"data-theme\")==c[0]?c.length==1?(document.documentElement.removeAttribute(\"data-theme\"),localStorage.removeItem(e||\"theme\")):(document.documentElement.setAttribute(\"data-theme\",c[1]),localStorage.setItem(e||\"theme\",c[1])):(document.documentElement.setAttribute(\"data-theme\",c[0]),localStorage.setItem(e||\"theme\",c[0]))}[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(i=>{i.classList.toggle(this.getAttribute(\"data-act-class\"))})})})}function d(){var t=document.querySelector(\"[data-set-theme='']\"),e=t?t.getAttribute(\"data-key\"):null;(function(a=localStorage.getItem(e||\"theme\")){if(a!=null&&a!=\"\")if(localStorage.getItem(e||\"theme\")&&localStorage.getItem(e||\"theme\")!=\"\"){document.documentElement.setAttribute(\"data-theme\",a);var o=document.querySelector(\"[data-set-theme='\"+a.toString()+\"']\");o&&([...document.querySelectorAll(\"[data-set-theme]\")].forEach(c=>{c.classList.remove(c.getAttribute(\"data-act-class\"))}),o.getAttribute(\"data-act-class\")&&o.classList.add(o.getAttribute(\"data-act-class\")))}else{var o=document.querySelector(\"[data-set-theme='']\");o.getAttribute(\"data-act-class\")&&o.classList.add(o.getAttribute(\"data-act-class\"))}})(),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(a=>{a.addEventListener(\"click\",function(){document.documentElement.setAttribute(\"data-theme\",this.getAttribute(\"data-set-theme\")),localStorage.setItem(e||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(o=>{o.classList.remove(o.getAttribute(\"data-act-class\"))}),a.getAttribute(\"data-act-class\")&&a.classList.add(a.getAttribute(\"data-act-class\"))})})}function r(){var t=document.querySelector(\"select[data-choose-theme]\"),e=t?t.getAttribute(\"data-key\"):null;(function(a=localStorage.getItem(e||\"theme\")){if(localStorage.getItem(e||\"theme\")){document.documentElement.setAttribute(\"data-theme\",a);var o=document.querySelector(\"select[data-choose-theme] [value='\"+a.toString()+\"']\");o&&[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+a.toString()+\"']\")].forEach(c=>{c.selected=!0})}})(),t&&[...document.querySelectorAll(\"select[data-choose-theme]\")].forEach(a=>{a.addEventListener(\"change\",function(){document.documentElement.setAttribute(\"data-theme\",this.value),localStorage.setItem(e||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+localStorage.getItem(e||\"theme\")+\"']\")].forEach(o=>{o.selected=!0})})})}function m(t=!0){t===!0?document.addEventListener(\"DOMContentLoaded\",function(e){n(),r(),d()}):(n(),r(),d())}l.exports={themeChange:m}})(u);var h=u.exports;h.themeChange();document.addEventListener(\"DOMContentLoaded\",()=>{const l=document.querySelector(\".carousel-track\"),s=Array.from(l.children);if(l){let n=0;const d=.3;let r=!1;s.forEach(t=>{const e=t.cloneNode(!0);l.appendChild(e)});const m=()=>{if(n-=d,!r){if(Math.abs(n)>=s[0].offsetWidth+300){const t=l.firstElementChild;t&&(l.appendChild(t),n+=t.offsetWidth+32)}l.style.transform=`translateX(${n}px)`}requestAnimationFrame(m)};l.addEventListener(\"mouseenter\",()=>{r=!0}),l.addEventListener(\"mouseleave\",()=>{r=!1}),requestAnimationFrame(m)}});\n"}],"styles":[{"type":"inline","content":"@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.carousel[data-astro-cid-rwdnjcpj]{width:100%;overflow:hidden;position:relative}.carousel-track[data-astro-cid-rwdnjcpj]{display:flex;gap:1rem;will-change:transform;transform:translate(0)}.carousel-track[data-astro-cid-rwdnjcpj] img[data-astro-cid-rwdnjcpj]{flex-shrink:0;width:60px;height:60px;-o-object-fit:cover;object-fit:cover;border-radius:50%;transition:transform .3s ease}.carousel-track[data-astro-cid-rwdnjcpj] img[data-astro-cid-rwdnjcpj]:hover{transform:scale(1.1)}@media (max-width: 768px){.flex-col[data-astro-cid-3ef6ksr2].justify-end{display:flex;flex-direction:column;justify-content:center;align-items:center}}body{font-family:DM Sans Variable,sans-serif}@media only screen and (max-width: 480px){*{font-size:12px}}.overflow-y-scroll::-webkit-scrollbar{width:3px}.overflow-y-scroll::-webkit-scrollbar-thumb{background-color:oklch(var(--s))}.overflow-y-scroll{scrollbar-width:1px}@media (max-width: 768px){.container{flex-direction:column}}@media (min-width: 768px){.container{display:flex;flex-wrap:wrap}}\n"},{"type":"external","src":"/_astro/about.DFL7QKlf.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/steevenmedina/portfolio/astro-cv-esquelete/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/projects/1_ApexCore.md":"chunks/pages/1_ApexCore_B9AJud7y.mjs","/src/pages/certificates/1_Playwright.md":"chunks/pages/1_Playwright_B-WbyjZA.mjs","/src/pages/projects/2_ChivoWallet.md":"chunks/pages/2_ChivoWallet_DX4mFlLB.mjs","/src/pages/certificates/2_SeleniumJava.md":"chunks/pages/2_SeleniumJava_n_ln-x46.mjs","/src/pages/projects/3_Cap.md":"chunks/pages/3_Cap_B5wWoFoS.mjs","/src/pages/certificates/3_FundamentalsWebDevelopment.md":"chunks/pages/3_FundamentalsWebDevelopment_De9HiNxR.mjs","/src/pages/projects/4_CignaMedical.md":"chunks/pages/4_CignaMedical_BXbMCNle.mjs","/src/pages/certificates/4_ScrumFoundation.md":"chunks/pages/4_ScrumFoundation_B73BhmiV.mjs","/src/pages/projects/5_AmericaMobile.md":"chunks/pages/5_AmericaMobile_D4_NGa9-.mjs","/src/pages/certificates/5_JavaScript.md":"chunks/pages/5_JavaScript_BYjTQtmB.mjs","/src/pages/certificates/6_SQLServer.md":"chunks/pages/6_SQLServer_Dk5PkEuf.mjs","/src/pages/about/about.md":"chunks/pages/about_BIuu0MT5.mjs","/src/pages/customers/customers.md":"chunks/pages/customers_DSiHUBjy.mjs","/src/pages/contact/email.md":"chunks/pages/email_BOxPsurc.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_D76gqiDh.mjs","/src/pages/contact/github.md":"chunks/pages/github_CAJ96mc7.mjs","/src/pages/index.astro":"chunks/pages/index_BdRcgeMt.mjs","/src/pages/contact/linkedin.md":"chunks/pages/linkedin_DUSYdDPD.mjs","/src/pages/studies/studie1.md":"chunks/pages/studie1_CB9o5XSt.mjs","/src/pages/contact/whatsapp.md":"chunks/pages/whatsapp_Dmk7x2mG.mjs","/src/pages/works/work1.md":"chunks/pages/work1_CG8IVjlL.mjs","/src/pages/works/work2.md":"chunks/pages/work2_QRSu6mbw.mjs","/src/pages/works/work3.md":"chunks/pages/work3_BCzcRzt7.mjs","\u0000@astrojs-manifest":"manifest_C9SI-vjl.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DMe0tWYb.mjs","\u0000@astro-page:src/pages/about/about@_@md":"chunks/about_C4TH6WOr.mjs","\u0000@astro-page:src/pages/certificates/1_Playwright@_@md":"chunks/1_Playwright_Bo64UsLq.mjs","\u0000@astro-page:src/pages/certificates/2_SeleniumJava@_@md":"chunks/2_SeleniumJava_CZmyDeqR.mjs","\u0000@astro-page:src/pages/certificates/3_FundamentalsWebDevelopment@_@md":"chunks/3_FundamentalsWebDevelopment_ByB1Cjre.mjs","\u0000@astro-page:src/pages/certificates/4_ScrumFoundation@_@md":"chunks/4_ScrumFoundation_CpdpRYlA.mjs","\u0000@astro-page:src/pages/certificates/5_JavaScript@_@md":"chunks/5_JavaScript_DBPKZri-.mjs","\u0000@astro-page:src/pages/certificates/6_SQLServer@_@md":"chunks/6_SQLServer_CIm9xRFO.mjs","\u0000@astro-page:src/pages/contact/email@_@md":"chunks/email_Dgh1Dzwy.mjs","\u0000@astro-page:src/pages/contact/github@_@md":"chunks/github_C_gqmnjk.mjs","\u0000@astro-page:src/pages/contact/linkedin@_@md":"chunks/linkedin_BeJHK0Do.mjs","\u0000@astro-page:src/pages/contact/whatsapp@_@md":"chunks/whatsapp_CTDQWG4C.mjs","\u0000@astro-page:src/pages/customers/customers@_@md":"chunks/customers_DG80heLb.mjs","\u0000@astro-page:src/pages/projects/1_ApexCore@_@md":"chunks/1_ApexCore_DMeuf11w.mjs","\u0000@astro-page:src/pages/projects/2_ChivoWallet@_@md":"chunks/2_ChivoWallet_BeWG7zNq.mjs","\u0000@astro-page:src/pages/projects/3_Cap@_@md":"chunks/3_Cap_C3ZrprR2.mjs","\u0000@astro-page:src/pages/projects/4_CignaMedical@_@md":"chunks/4_CignaMedical_CHHmagNk.mjs","\u0000@astro-page:src/pages/projects/5_AmericaMobile@_@md":"chunks/5_AmericaMobile_BFIRJt1p.mjs","\u0000@astro-page:src/pages/studies/studie1@_@md":"chunks/studie1_CTdHcm6d.mjs","\u0000@astro-page:src/pages/works/work1@_@md":"chunks/work1_9ZBBQnWr.mjs","\u0000@astro-page:src/pages/works/work2@_@md":"chunks/work2_uvwwAaWO.mjs","\u0000@astro-page:src/pages/works/work3@_@md":"chunks/work3_BDW1iafD.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BDGESpZS.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BdsdqX8J.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2","/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2","/_astro/about.DFL7QKlf.css","/cv-2024.pdf","/cv-20240219.pdf","/favicon.webp","/favicon_.webp","/gl_flag_128x.png","/profile.webp","/profile_.webp","/snap-items.png","/snap-md.png","/snap_laptop.webp","/snap_mobile.webp","/snap_project.webp","/logos/logo1.png","/logos/logo10.png","/logos/logo2.png","/logos/logo3.png","/logos/logo4.png","/logos/logo5.png","/logos/logo6.png","/logos/logo7.png","/logos/logo8.png","/logos/logo9.png"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
