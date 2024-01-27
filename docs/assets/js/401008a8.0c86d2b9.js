"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[4264],{9636:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=a(5893),r=a(1151);const n={title:"Node.js Database",slug:"nodejs-database.html"},o="Node.js Database",i={id:"nodejs-database",title:"Node.js Database",description:"RxDB is a fast, reactive realtime NoSQL database made for JavaScript applications like Websites, hybrid Apps, Electron-Apps, Progressive Web Apps and Node.js. While RxDB was initially created to be used with UI applications, it has been matured and optimized to make it useful for pure server-side use cases. It can be used as embedded, local database inside of the Node.js JavaScript process, or it can be used similar to a database server that Node.js can connect to. The RxStorage layer makes it possible to switch out the underlying storage engine which makes RxDB a very flexible database that can be optimized for many scenarios.",source:"@site/docs/nodejs-database.md",sourceDirName:".",slug:"/nodejs-database.html",permalink:"/nodejs-database.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/master/docs-src/docs/nodejs-database.md",tags:[],version:"current",frontMatter:{title:"Node.js Database",slug:"nodejs-database.html"},sidebar:"tutorialSidebar",previous:{title:"RxDB TypeScript Tutorial",permalink:"/tutorials/typescript.html"},next:{title:"Questions and Answers",permalink:"/questions-answers.html"}},d={},l=[{value:"Persistent Database",id:"persistent-database",level:2},{value:"RxDB as Node.js In-Memory Database",id:"rxdb-as-nodejs-in-memory-database",level:2},{value:"Hybrid In-memory-persistence-synced storage",id:"hybrid-in-memory-persistence-synced-storage",level:2},{value:"Share database between microservices with RxDB",id:"share-database-between-microservices-with-rxdb",level:2},{value:"Follow up on RxDB+Node.js",id:"follow-up-on-rxdbnodejs",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"nodejs-database",children:"Node.js Database"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://rxdb.info",children:"RxDB"})," is a fast, reactive realtime NoSQL ",(0,s.jsx)(t.strong,{children:"database"})," made for ",(0,s.jsx)(t.strong,{children:"JavaScript"})," applications like Websites, hybrid Apps, Electron-Apps, Progressive Web Apps and ",(0,s.jsx)(t.strong,{children:"Node.js"}),". While RxDB was initially created to be used with UI applications, it has been matured and optimized to make it useful for pure server-side use cases. It can be used as embedded, local database inside of the Node.js JavaScript process, or it can be used similar to a database server that Node.js can connect to. The ",(0,s.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," layer makes it possible to switch out the underlying storage engine which makes RxDB a very flexible database that can be optimized for many scenarios."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"./files/icons/nodejs.svg",alt:"Node.js",width:"70"})}),"\n",(0,s.jsx)(t.h2,{id:"persistent-database",children:"Persistent Database"}),"\n",(0,s.jsxs)(t.p,{children:['To get a "normal" database connection where the data is persisted to a file system, the RxDB real time database provides multiple ',(0,s.jsx)(t.a,{href:"/rx-storage.html",children:"storage implementations"})," that work in Node.js."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/rx-storage-foundationdb.html",children:"FoundationDB"})," storage connects to a ",(0,s.jsx)(t.a,{href:"https://github.com/apple/foundationdb",children:"FoundationDB"})," cluster which itself is just a distributed key-value engine. RxDB adds the NoSQL query-engine, indexes and other features on top of it.\nIt scales horizontally because you can always add more servers to the FoundationDB cluster to increase the capacity.\nSetting up a RxDB database is pretty simple. You import the FoundationDB RxStorage and tell RxDB to use that when calling ",(0,s.jsx)(t.code,{children:"createRxDatabase"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageFoundationDB } from 'rxdb/plugins/storage-foundationdb';\n\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageFoundationDB({\n        apiVersion: 620,\n        clusterFile: '/path/to/fdb.cluster'\n    })\n});\n\n// add a collection\nawait db.addCollections({\n    users: {\n        schema: mySchema\n    }\n});\n\n// run a query\nconst result = await db.users.find({\n    selector: {\n        name: 'foobar'\n    }\n}).exec();\n\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Another alternative storage is the ",(0,s.jsx)(t.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})," that stores the data inside of a SQLite filebased database. The SQLite storage is faster then FoundationDB and does not require to set up a cluster or anything because SQLite directly stores and reads the data inside of the filesystem. The downside of that is that it only scales vertically."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsNode\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport sqlite3 from 'sqlite3';\nconst myRxDatabase = await createRxDatabase({\n    name: 'path/to/database/file/foobar.db',\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsNode(sqlite3)\n    })\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Because the SQLite RxStorage is not free and you might not want to set up a FoundationDB cluster, there is also the option to use the ",(0,s.jsx)(t.a,{href:"/rx-storage-lokijs.html",children:"LokiJS RxStorage"})," together with the filesystem adapter. This will store the data as plain json in a file and load everything into memory on startup. This works great for small prototypes but it is not recommended to be used in production."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nconst LokiFsStructuredAdapter = require('lokijs/src/loki-fs-structured-adapter.js');\nimport { getRxStorageLoki } from 'rxdb/plugins/storage-lokijs';\nimport sqlite3 from 'sqlite3';\nconst myRxDatabase = await createRxDatabase({\n    name: 'path/to/database/file/foobar.db',\n    storage: getRxStorageLoki({\n        adapter: new LokiFsStructuredAdapter()\n    })\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"Here is a performance comparison chart of the different storages (lower is better):"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"./files/rx-storage-performance-node.png",alt:"database performance - Node.js",width:"700"})}),"\n",(0,s.jsx)(t.h2,{id:"rxdb-as-nodejs-in-memory-database",children:"RxDB as Node.js In-Memory Database"}),"\n",(0,s.jsxs)(t.p,{children:["One of the easiest way to use RxDB in Node.js is to use the ",(0,s.jsx)(t.a,{href:"/rx-storage-memory.html",children:"Memory RxStorage"}),". As the name implies, it stores the data directly ",(0,s.jsx)(t.strong,{children:"in-memory"})," of the Node.js JavaScript process. This makes it really fast to read and write data but of course the data is not persisted and will be lost when the nodejs process exits. Often the in-memory option is used when RxDB is used in unit tests because it automatically cleans up everything afterwards."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageMemory } from 'rxdb/plugins/storage-memory';\n\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageMemory()\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Also notice that the ",(0,s.jsx)(t.a,{href:"https://medium.com/geekculture/node-js-default-memory-settings-3c0fe8a9ba1",children:"default memory limit"})," of Node.js is 4gb (might change of newer versions) so for bigger datasets you might want to increase the limit with the ",(0,s.jsx)(t.code,{children:"max-old-space-size"})," flag:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# increase the Node.js memory limit to 8GB\nnode --max-old-space-size=8192 index.js\n"})}),"\n",(0,s.jsx)(t.h2,{id:"hybrid-in-memory-persistence-synced-storage",children:"Hybrid In-memory-persistence-synced storage"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to have the performance of an ",(0,s.jsx)(t.strong,{children:"in-memory database"})," but require persistency of the data, you can use the ",(0,s.jsx)(t.a,{href:"/rx-storage-memory-synced.html",children:"memory-synced storage"}),". On database creation it will load all data into the memory and on writes it will first write the data into memory and later also write it to the persistent storage in the background. In the following example the FoundationDB storage is used, but any other RxStorage can be used as persistence layer."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageFoundationDB } from 'rxdb/plugins/storage-foundationdb';\nimport { getMemorySyncedRxStorage } from 'rxdb-premium/plugins/storage-memory-synced';\n\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getMemorySyncedRxStorage({\n        storage: getRxStorageFoundationDB({\n            apiVersion: 620,\n            clusterFile: '/path/to/fdb.cluster'\n        })\n    })\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"While this approach gives you a database with great performance and persistent, it has two major downsides:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The database size is limited to the memory size"}),"\n",(0,s.jsx)(t.li,{children:"Writes can be lost when the Node.js process exists between a write to the memory state and the background persisting."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"share-database-between-microservices-with-rxdb",children:"Share database between microservices with RxDB"}),"\n",(0,s.jsxs)(t.p,{children:["Using a local, embedded database in Node.js works great until you have to share the data with another Node.js process or another server at all.\nTo share the database state with other instances, RxDB provides two different methods. One is ",(0,s.jsx)(t.a,{href:"/replication.html",children:"replication"})," and the other is the ",(0,s.jsx)(t.a,{href:"/rx-storage-remote.html",children:"remote RxStorage"}),'.\nThe replication copies over the whole database set to other instances live-replicates all ongoing writes. This has the benefit of scaling better because each of your microservice will run queries on its own copy of the dataset.\nSometimes however you might not want to store the full dataset on each microservice. Then it is better to use the remote RxStorage and connect it to the "main" database. The remote storage will run all operations the main database and return the result to the calling database.']}),"\n",(0,s.jsx)(t.h2,{id:"follow-up-on-rxdbnodejs",children:"Follow up on RxDB+Node.js"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Check out the ",(0,s.jsx)(t.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/node",children:"RxDB Nodejs example"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["If you haven't done yet, you should start learning about RxDB with the ",(0,s.jsx)(t.a,{href:"/quickstart.html",children:"Quickstart Tutorial"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["I created ",(0,s.jsx)(t.a,{href:"/alternatives.html",children:"a list of embedded JavaSCript databases"})," that you will help you to pick a database if you do not want to use RxDB."]}),"\n",(0,s.jsxs)(t.li,{children:["Check out the ",(0,s.jsx)(t.a,{href:"/rx-storage-mongodb.html",children:"MongoDB RxStorage"})," that uses MongoDB for the database connection from your Node.js application and runs the RxDB real time database on top of it."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var s=a(7294);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);