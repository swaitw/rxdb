"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[6616],{3395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(4848),r=t(8453);const o={title:"Instant Performance with Memory Synced RxStorage",slug:"rx-storage-memory-synced.html",description:"Accelerate RxDB with in-memory storage replicated to disk. Enjoy instant queries, faster loads, and unstoppable performance for your web apps."},s="Memory Synced RxStorage",i={id:"rx-storage-memory-synced",title:"Instant Performance with Memory Synced RxStorage",description:"Accelerate RxDB with in-memory storage replicated to disk. Enjoy instant queries, faster loads, and unstoppable performance for your web apps.",source:"@site/docs/rx-storage-memory-synced.md",sourceDirName:".",slug:"/rx-storage-memory-synced.html",permalink:"/rx-storage-memory-synced.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Instant Performance with Memory Synced RxStorage",slug:"rx-storage-memory-synced.html",description:"Accelerate RxDB with in-memory storage replicated to disk. Enjoy instant queries, faster loads, and unstoppable performance for your web apps."}},d={},c=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Replication and Migration with the memory-synced storage",id:"replication-and-migration-with-the-memory-synced-storage",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"memory-synced-rxstorage",children:"Memory Synced RxStorage"}),"\n",(0,a.jsxs)(n.p,{children:["The memory synced ",(0,a.jsx)(n.a,{href:"/rx-storage.html",children:"RxStorage"})," is a wrapper around any other RxStorage. The wrapper creates an in-memory storage that is used for query and write operations. This memory instance is replicated with the underlying storage for persistence.\nThe main reason to use this is to improve initial page load and query/write times. This is mostly useful in browser based applications."]}),"\n",(0,a.jsx)(n.h2,{id:"pros",children:"Pros"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Improves read/write performance because these operations run against the in-memory storage."}),"\n",(0,a.jsx)(n.li,{children:"Decreases initial page load because it load all data in a single bulk request. It even detects if the database is used for the first time and then it does not have to await the creation of the persistent storage."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"cons",children:"Cons"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"It does not support attachments."}),"\n",(0,a.jsxs)(n.li,{children:["When the JavaScript process is killed ungracefully like when the browser crashes or the power of the PC is terminated, it might happen that some memory writes are not persisted to the parent storage. This can be prevented with the ",(0,a.jsx)(n.code,{children:"awaitWritePersistence"})," flag."]}),"\n",(0,a.jsx)(n.li,{children:"This can only be used if all data fits into the memory of the JavaScript process. This is normally not a problem because a browser has much memory these days and plain json document data is not that big."}),"\n",(0,a.jsxs)(n.li,{children:["Because it has to await an initial replication from the parent storage into the memory, initial page load time can increase when much data is already stored. This is likely not a problem when you store less than ",(0,a.jsx)(n.code,{children:"10k"})," documents."]}),"\n",(0,a.jsx)(n.li,{children:"The memory-synced storage itself does not support replication and migration. Instead you have to replicate the underlying parent storage."}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"memory-synced"})," plugin is part of ",(0,a.jsx)(n.a,{href:"/premium/",children:"RxDB Premium \ud83d\udc51"}),". It is not part of the default RxDB module."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"The memory-synced RxStorage was removed in RxDB version 16",type:"note",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"memory-synced"})," was removed in RxDB version 16. Instead consider using the newer and better ",(0,a.jsx)(n.a,{href:"/rx-storage-memory-mapped.html",children:"memory-mapped RxStorage"})," which has better trade-offs and is easier to configure."]})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"\nimport {\n    getRxStorageIndexedDB\n} from 'rxdb-premium/plugins/storage-indexeddb';\nimport {\n    getMemorySyncedRxStorage\n} from 'rxdb-premium/plugins/storage-memory-synced';\n\n/**\n * Here we use the IndexedDB RxStorage as persistence storage.\n * Any other RxStorage can also be used.\n */\nconst parentStorage = getRxStorageIndexedDB();\n\n// wrap the persistent storage with the memory synced one.\nconst storage = getMemorySyncedRxStorage({\n    storage: parentStorage\n});\n\n// create the RxDatabase like you would do with any other RxStorage\nconst db = await createRxDatabase({\n    name: 'myDatabase,\n    storage,\n});\n/** ... **/\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.p,{children:"Some options can be provided to fine tune the performance and behavior."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"\nimport {\n    requestIdlePromise\n} from 'rxdb';\n\nconst storage = getMemorySyncedRxStorage({\n    storage: parentStorage,\n\n    /**\n     * Defines how many document\n     * get replicated in a single batch.\n     * [default=50]\n     * \n     * (optional)\n     */\n    batchSize: 50,\n\n    /**\n     * By default, the parent storage will be created without indexes for a faster page load.\n     * Indexes are not needed because the queries will anyway run on the memory storage.\n     * You can disable this behavior by setting keepIndexesOnParent to true.\n     * If you use the same parent storage for multiple RxDatabase instances where one is not\n     * a asynced-memory storage, you will get the error: 'schema not equal to existing storage'\n     * if you do not set keepIndexesOnParent to true.\n     * \n     * (optional)\n     */\n    keepIndexesOnParent: true,\n\n    /**\n     * If set to true, all write operations will resolve AFTER the writes\n     * have been persisted from the memory to the parentStorage.\n     * This ensures writes are not lost even if the JavaScript process exits\n     * between memory writes and the persistence interval.\n     * default=false\n     */\n    awaitWritePersistence: true,\n\n    /**\n     * After a write, await until the return value of this method resolves\n     * before replicating with the master storage.\n     * \n     * By returning requestIdlePromise() we can ensure that the CPU is idle\n     * and no other, more important operation is running. By doing so we can be sure\n     * that the replication does not slow down any rendering of the browser process.\n     * \n     * (optional)\n     */\n    waitBeforePersist: () => requestIdlePromise();\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"replication-and-migration-with-the-memory-synced-storage",children:"Replication and Migration with the memory-synced storage"}),"\n",(0,a.jsxs)(n.p,{children:["The memory-synced storage itself does not support replication and migration. Instead you have to replicate the underlying parent storage.\nFor example when you use it on top of an ",(0,a.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB storage"}),", you have to run replication on that storage instead by creating a different ",(0,a.jsx)(n.a,{href:"/rx-database.html",children:"RxDatabase"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const parentStorage = getRxStorageIndexedDB();\n\nconst memorySyncedStorage = getMemorySyncedRxStorage({\n    storage: parentStorage,\n    keepIndexesOnParent: true\n});\n\nconst databaseName = 'mydata';\n\n/**\n * Create a parent database with the same name+collections\n * and use it for replication and migration.\n * The parent database must be created BEFORE the memory-synced database\n * to ensure migration has already been run.\n */\nconst parentDatabase = await createRxDatabase({\n    name: databaseName,\n    storage: parentStorage\n});\nawait parentDatabase.addCollections(/* ... */);\n\nreplicateRxCollection({\n    collection: parentDatabase.myCollection,\n    /* ... */\n});\n\n\n/**\n * Create an equal memory-synced database with the same name+collections\n * and use it for writes and queries.\n */\nconst memoryDatabase = await createRxDatabase({\n    name: databaseName,\n    storage: memorySyncedStorage\n});\nawait memoryDatabase.addCollections(/* ... */);\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(6540);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);