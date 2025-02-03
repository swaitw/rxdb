"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[5966],{3057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(4848),l=n(8453);const r={title:"Leader Election",slug:"leader-election.html"},i="Leader-Election",s={id:"leader-election",title:"Leader Election",description:"RxDB comes with a leader-election which elects a leading instance between different instances in the same javascript runtime.",source:"@site/docs/leader-election.md",sourceDirName:".",slug:"/leader-election.html",permalink:"/leader-election.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Leader Election",slug:"leader-election.html"},sidebar:"tutorialSidebar",previous:{title:"Backup",permalink:"/backup.html"},next:{title:"Streamlined RxDB Middleware",permalink:"/middleware.html"}},o={},d=[{value:"Use-case-example",id:"use-case-example",level:2},{value:"Solution",id:"solution",level:2},{value:"Add the leader election plugin",id:"add-the-leader-election-plugin",level:2},{value:"Code-example",id:"code-example",level:2},{value:"Handle Duplicate Leaders",id:"handle-duplicate-leaders",level:2},{value:"Live-Example",id:"live-example",level:2},{value:"Try it out",id:"try-it-out",level:2},{value:"Notice",id:"notice",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"leader-election",children:"Leader-Election"}),"\n",(0,a.jsx)(t.p,{children:"RxDB comes with a leader-election which elects a leading instance between different instances in the same javascript runtime.\nBefore you read this, please check out on how many of your open browser-tabs you have opened the same website more than once. Count them, I will wait.."}),"\n",(0,a.jsx)(t.p,{children:"So if you would now inspect the traffic that these open tabs produce, you can see that many of them send exact the same data over wire for every tab. No matter if the data is sent with an open websocket or by polling."}),"\n",(0,a.jsx)(t.h2,{id:"use-case-example",children:"Use-case-example"}),"\n",(0,a.jsx)(t.p,{children:"Imagine we have a website which displays the current temperature of the visitors location in various charts, numbers or heatmaps. To always display the live-data, the website opens a websocket to our API-Server which sends the current temperature every 10 seconds. Using the way most sites are currently build, we can now open it in 5 browser-tabs and it will open 5 websockets which send data 6*5=30 times per minute. This will not only waste the power of your clients device, but also wastes your api-servers resources by opening redundant connections."}),"\n",(0,a.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,a.jsxs)(t.p,{children:["The solution to this redundancy is the usage of a ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Leader_election",children:"leader-election"}),"-algorithm which makes sure that always exactly one tab is managing the remote-data-access. The managing tab is the elected leader and stays leader until it is closed. No matter how many tabs are opened or closed, there must be always exactly ",(0,a.jsx)(t.strong,{children:"one"})," leader.\nYou could now start implementing a messaging-system between your browser-tabs, hand out which one is leader, solve conflicts and reassign a new leader when the old one 'dies'.\nOr just use RxDB which does all these things for you."]}),"\n",(0,a.jsx)(t.h2,{id:"add-the-leader-election-plugin",children:"Add the leader election plugin"}),"\n",(0,a.jsxs)(t.p,{children:["To enable the leader election, you have to add the ",(0,a.jsx)(t.code,{children:"leader-election"})," plugin."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { addRxPlugin } from 'rxdb';\nimport { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';\naddRxPlugin(RxDBLeaderElectionPlugin);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"code-example",children:"Code-example"}),"\n",(0,a.jsx)(t.p,{children:"To make it easy, here is an example where the temperature is pulled every ten seconds and saved to a collection. The pulling starts at the moment where the opened tab becomes the leader."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const db = await createRxDatabase({\n  name: 'weatherDB',\n  storage: getRxStorageDexie(),\n  password: 'myPassword',\n  multiInstance: true\n});\nawait db.addCollections({\n  temperature: {\n    schema: mySchema\n  }\n});\n\ndb.waitForLeadership()\n  .then(() => {\n    console.log('Long lives the king!'); // <- runs when db becomes leader\n    setInterval(async () => {\n      const temp = await fetch('https://example.com/api/temp/');\n      db.temperature.insert({\n          degrees: temp,\n          time: new Date().getTime()\n      });\n    }, 1000 * 10);\n  });\n"})}),"\n",(0,a.jsx)(t.h2,{id:"handle-duplicate-leaders",children:"Handle Duplicate Leaders"}),"\n",(0,a.jsxs)(t.p,{children:["On rare occasions, it can happen that ",(0,a.jsx)(t.a,{href:"https://github.com/pubkey/broadcast-channel/blob/master/.github/README.md#handle-duplicate-leaders",children:"more than one leader"})," is elected. This can happen when the CPU is on 100% or for any other reason the JavaScript process is fully blocked for a long time.\nFor most cases this is not really problem because on duplicate leaders, both browser tabs replicate with the same backend anyways.\nTo handle the duplicate leader event, you can access the leader elector and set a handler:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import {\n    getLeaderElectorByBroadcastChannel\n} from 'rxdb/plugins/leader-election';\n\nconst leaderElector = getLeaderElectorByBroadcastChannel(broadcastChannel);\nleaderElector.onduplicate = async () => {\n    // Duplicate leader detected -> reload the page.\n    location.reload();\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"live-example",children:"Live-Example"}),"\n",(0,a.jsx)(t.p,{children:"In this example the leader is marked with the crown \u265b"}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"./files/leader-election.gif",alt:"Leader Election",width:"300"})}),"\n",(0,a.jsx)(t.h2,{id:"try-it-out",children:"Try it out"}),"\n",(0,a.jsxs)(t.p,{children:["Run the ",(0,a.jsx)(t.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/angular",children:"angular-example"})," where the leading tab is marked with a crown on the top-right-corner."]}),"\n",(0,a.jsx)(t.h2,{id:"notice",children:"Notice"}),"\n",(0,a.jsxs)(t.p,{children:["The leader election is implemented via the  ",(0,a.jsx)(t.a,{href:"https://github.com/pubkey/broadcast-channel#using-the-leaderelection",children:"broadcast-channel module"}),".\nThe leader is elected between different processes on the same javascript-runtime. Like multiple tabs in the same browser or multiple NodeJs-processes on the same machine. It will not run between different replicated instances."]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(6540);const l={},r=a.createContext(l);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);