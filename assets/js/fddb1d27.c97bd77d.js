"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1699],{3088:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=o(5893),a=o(1151);const r={title:"Radarr"},i=void 0,s={id:"applications/download-tools/radarr",title:"Radarr",description:"Homepage: radarr",source:"@site/docs/applications/download-tools/radarr.md",sourceDirName:"applications/download-tools",slug:"/applications/download-tools/radarr",permalink:"/docs/applications/download-tools/radarr",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/download-tools/radarr.md",tags:[],version:"current",frontMatter:{title:"Radarr"},sidebar:"tutorialSidebar",previous:{title:"pyLoad",permalink:"/docs/applications/download-tools/pyload"},next:{title:"Sabnzbd",permalink:"/docs/applications/download-tools/sabnzbd"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Homepage: ",(0,t.jsx)(n.a,{href:"https://radarr.video/",children:"radarr"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Radarr"})," is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"radarr_enabled: true"})," in your ",(0,t.jsx)(n.code,{children:"/inventories/[my inventory]/group_vars/nas.yml"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["The Radarr web interface can be found at ",(0,t.jsx)(n.code,{children:"http://ansible_nas_host_or_ip:7878"})," by default"]}),"\n",(0,t.jsx)(n.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["First make sure Radarr has permissions to write and read the ",(0,t.jsx)(n.code,{children:"/download"}),", and ",(0,t.jsx)(n.code,{children:"/movies"})," folders"]}),". Do this by ensuring the ",(0,t.jsx)(n.code,{children:"radarr_movies_directory:"})," and ",(0,t.jsx)(n.code,{children:"radarr_download_directory"})," settings are correct."]}),"\n",(0,t.jsxs)(n.p,{children:["Radarr will get the file path from the Download client. On default settings with Transmission the path is ",(0,t.jsx)(n.code,{children:"/storage/downloads/complete"}),". You will need to create a path mapping in the ",(0,t.jsx)(n.strong,{children:"Remote Path Mappings"})," settings under ",(0,t.jsx)(n.strong,{children:"Download Client"}),"  to point to your internal path that is by default ",(0,t.jsx)(n.code,{children:"/downloads"}),".  ",(0,t.jsxs)(n.em,{children:["If you have difficulties with the path mapping you could also just add a new volume path for the Transmission container and use ",(0,t.jsx)(n.code,{children:"/downloads"})," as the download directory."]})]}),"\n",(0,t.jsxs)(n.p,{children:["For Radarr to understand that the ",(0,t.jsx)(n.code,{children:"/movies"})," folder is a folder, you'll need to add a new subfolder into it.\nYou can also do this by adding a random movie to the folder. Keep in mind to have the internal setting ",(0,t.jsx)(n.strong,{children:"Create empty movie folders"})," on ",(0,t.jsx)(n.strong,{children:"yes"})]}),"\n",(0,t.jsxs)(n.p,{children:["Comprehensive setup information can be found on the ",(0,t.jsx)(n.a,{href:"https://github.com/Radarr/Radarr/wiki/Setup-Guide",children:"Radarr GitHub wiki"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>i});var t=o(7294);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);