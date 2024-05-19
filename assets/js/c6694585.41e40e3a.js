"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2827],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,y=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(y,p(p({ref:r},l),{},{components:t})):n.createElement(y,p({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7027:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>p,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const o={},p="Examples",c={unversionedId:"examples/examples",id:"examples/examples",isDocsHomePage:!1,title:"Examples",description:"Run PIP Package",source:"@site/docs/examples/examples.md",sourceDirName:"examples",slug:"/examples/examples",permalink:"/docs/examples/examples",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/examples/examples.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/gpt-researcher/troubleshooting"},next:{title:"Contribute",permalink:"/docs/contribute"}},i=[{value:"Run PIP Package",id:"run-pip-package",children:[],level:3}],s={toc:i};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"run-pip-package"},"Run PIP Package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\nimport asyncio\n\n\nasync def main():\n    """\n    This is a sample script that shows how to run a research report.\n    """\n    # Query\n    query = "What happened in the latest burning man floods?"\n\n    # Report Type\n    report_type = "research_report"\n\n    # Initialize the researcher\n    researcher = GPTResearcher(query=query, report_type=report_type, config_path=None)\n    # Conduct research on the given query\n    await researcher.conduct_research()\n    # Write the report\n    report = await researcher.write_report()\n    \n    return report\n\n\nif __name__ == "__main__":\n    asyncio.run(main())\n')))}l.isMDXComponent=!0}}]);