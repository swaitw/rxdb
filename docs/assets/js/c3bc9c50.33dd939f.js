"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[9167],{4337:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(4848),i=t(8453);const s={title:"RxDB as a Database for React Applications",slug:"react-database.html",description:"earn how the RxDB database supercharges React apps with offline access, real-time updates, and smooth data flow. Boost performance and engagement."},r="RxDB as a Database for React Applications",o={id:"articles/react-database",title:"RxDB as a Database for React Applications",description:"earn how the RxDB database supercharges React apps with offline access, real-time updates, and smooth data flow. Boost performance and engagement.",source:"@site/docs/articles/react-database.md",sourceDirName:"articles",slug:"/articles/react-database.html",permalink:"/articles/react-database.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RxDB as a Database for React Applications",slug:"react-database.html",description:"earn how the RxDB database supercharges React apps with offline access, real-time updates, and smooth data flow. Boost performance and engagement."},sidebar:"tutorialSidebar",previous:{title:"RxDB as a Database for Progressive Web Apps (PWA)",permalink:"/articles/progressive-web-app-database.html"},next:{title:"What Really Is a Realtime Database?",permalink:"/articles/realtime-database.html"}},c={},l=[{value:"Introducing RxDB as a JavaScript Database",id:"introducing-rxdb-as-a-javascript-database",level:2},{value:"What is RxDB?",id:"what-is-rxdb",level:2},{value:"Reactive Data Handling",id:"reactive-data-handling",level:3},{value:"Local-First Approach",id:"local-first-approach",level:3},{value:"Data Replication",id:"data-replication",level:3},{value:"Observable Queries",id:"observable-queries",level:3},{value:"Multi-Tab Support",id:"multi-tab-support",level:3},{value:"RxDB vs. Other React Database Options",id:"rxdb-vs-other-react-database-options",level:3},{value:"IndexedDB in React and the Advantage of RxDB",id:"indexeddb-in-react-and-the-advantage-of-rxdb",level:3},{value:"Using RxDB in a React Application",id:"using-rxdb-in-a-react-application",level:3},{value:"Using RxDB React Hooks",id:"using-rxdb-react-hooks",level:3},{value:"Different RxStorage Layers for RxDB",id:"different-rxstorage-layers-for-rxdb",level:3},{value:"Synchronizing Data with RxDB between Clients and Servers",id:"synchronizing-data-with-rxdb-between-clients-and-servers",level:3},{value:"Advanced RxDB Features and Techniques",id:"advanced-rxdb-features-and-techniques",level:3},{value:"Indexing and Performance Optimization",id:"indexing-and-performance-optimization",level:3},{value:"JSON Key Compression",id:"json-key-compression",level:3},{value:"Change Streams and Event Handling",id:"change-streams-and-event-handling",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Follow Up",id:"follow-up",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"rxdb-as-a-database-for-react-applications",children:"RxDB as a Database for React Applications"}),"\n",(0,n.jsx)(a.p,{children:"In the rapidly evolving landscape of web development, React has emerged as a cornerstone technology for building dynamic and responsive user interfaces. With the increasing complexity of modern web applications, efficient data management becomes pivotal. This article delves into the integration of RxDB, a potent client-side database, with React applications to optimize data handling and elevate the overall user experience."}),"\n",(0,n.jsx)(a.p,{children:"React has revolutionized the way web applications are built by introducing a component-based architecture. This approach enables developers to create reusable UI components that efficiently update in response to changes in data. The virtual DOM mechanism, a key feature of React, facilitates optimized rendering, enhancing performance and user interactivity."}),"\n",(0,n.jsx)(a.p,{children:"While React excels at managing the user interface, the need for efficient data storage and retrieval mechanisms is equally significant. A client-side database brings several advantages to React applications:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Improved Performance: Local data storage reduces the need for frequent server requests, resulting in faster data retrieval and enhanced application responsiveness."}),"\n",(0,n.jsx)(a.li,{children:"Offline Capabilities: A client-side database enables offline access to data, allowing users to interact with the application even when they are disconnected from the internet."}),"\n",(0,n.jsx)(a.li,{children:"Real-Time Updates: With the ability to observe changes in data, client-side databases facilitate real-time updates to the UI, ensuring users are always presented with the latest information."}),"\n",(0,n.jsx)(a.li,{children:"Reduced Server Load: By handling data operations locally, client-side databases alleviate the load on the server, contributing to a more scalable architecture."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"introducing-rxdb-as-a-javascript-database",children:"Introducing RxDB as a JavaScript Database"}),"\n",(0,n.jsx)(a.p,{children:"RxDB, a powerful JavaScript database, has garnered attention as an optimal solution for managing data in React applications. Built on top of the IndexedDB standard, RxDB combines the principles of reactive programming with database management. Its core features include reactive data handling, offline-first capabilities, and robust data replication."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("a",{href:"https://rxdb.info/",children:(0,n.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript React Database",width:"221"})})}),"\n",(0,n.jsx)(a.h2,{id:"what-is-rxdb",children:"What is RxDB?"}),"\n",(0,n.jsx)(a.p,{children:"RxDB, short for Reactive Database, is an open-source JavaScript database that seamlessly integrates reactive programming with database operations. It offers a comprehensive API for performing database actions and synchronizing data across clients and servers. RxDB's underlying philosophy revolves around observables, allowing developers to reactively manage data changes and create dynamic user interfaces."}),"\n",(0,n.jsx)(a.h3,{id:"reactive-data-handling",children:"Reactive Data Handling"}),"\n",(0,n.jsx)(a.p,{children:"One of RxDB's standout features is its support for reactive data handling. Traditional databases often require manual intervention for data fetching and updating, leading to complex and error-prone code. RxDB, however, automatically notifies subscribers whenever data changes occur, eliminating the need for explicit data manipulation. This reactive approach simplifies code and enhances the responsiveness of React components."}),"\n",(0,n.jsx)(a.h3,{id:"local-first-approach",children:"Local-First Approach"}),"\n",(0,n.jsxs)(a.p,{children:["RxDB embraces a ",(0,n.jsx)(a.a,{href:"/offline-first.html",children:"local-first"})," methodology, enabling applications to function seamlessly even in offline scenarios. By storing data locally, RxDB ensures that users can interact with the application and make updates regardless of internet connectivity. Once the connection is reestablished, RxDB synchronizes the local changes with the remote database, maintaining data consistency across devices."]}),"\n",(0,n.jsx)(a.h3,{id:"data-replication",children:"Data Replication"}),"\n",(0,n.jsx)(a.p,{children:"Data replication is a cornerstone of modern applications that require synchronization between multiple clients and servers. RxDB provides robust data replication mechanisms that facilitate real-time synchronization between different instances of the database. This ensures that changes made on one client are promptly propagated to others, contributing to a cohesive and unified user experience."}),"\n",(0,n.jsx)(a.h3,{id:"observable-queries",children:"Observable Queries"}),"\n",(0,n.jsx)(a.p,{children:"RxDB extends the concept of observables beyond data changes. It introduces observable queries, allowing developers to observe the results of database queries. This feature enables automatic updates to query results whenever relevant data changes occur. Observable queries simplify state management by eliminating the need to manually trigger updates in response to changing data."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-ts",children:"await db.heroes.find({\n  selector: {\n    healthpoints: {\n      $gt: 0\n    }\n  }\n})\n.$ // the $ returns an observable that emits each time the result set of the query changes\n.subscribe(aliveHeroes => console.dir(aliveHeroes));\n"})}),"\n",(0,n.jsx)(a.h3,{id:"multi-tab-support",children:"Multi-Tab Support"}),"\n",(0,n.jsx)(a.p,{children:"Web applications often operate in multiple browser tabs or windows. RxDB accommodates this scenario by offering built-in multi-tab support. It ensures that data changes made in one tab are efficiently propagated to other tabs, maintaining data consistency and providing a seamless experience for users interacting with the application across different tabs."}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"../files/multiwindow.gif",alt:"multi tab support",width:"450"})}),"\n",(0,n.jsx)(a.h3,{id:"rxdb-vs-other-react-database-options",children:"RxDB vs. Other React Database Options"}),"\n",(0,n.jsx)(a.p,{children:"While considering database options for React applications, RxDB stands out due to its unique combination of reactive programming and database capabilities. Unlike traditional solutions such as IndexedDB or Web Storage, which provide basic data storage, RxDB offers a dedicated database solution with advanced features. Additionally, while state management libraries like Redux and MobX can be adapted for database use, RxDB provides an integrated solution specifically designed for handling data."}),"\n",(0,n.jsx)(a.h3,{id:"indexeddb-in-react-and-the-advantage-of-rxdb",children:"IndexedDB in React and the Advantage of RxDB"}),"\n",(0,n.jsxs)(a.p,{children:["Using IndexedDB directly in React can be challenging due to its low-level, callback-based API which doesn't align neatly with modern React's Promise and async/await patterns. This intricacy often leads to bulky and complex implementations for developers. Also, when used wrong, IndexedDB can have a worse ",(0,n.jsx)(a.a,{href:"/slow-indexeddb.html",children:"performance profile"})," then it could have. In contrast, RxDB, with the ",(0,n.jsx)(a.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"})," and the ",(0,n.jsx)(a.a,{href:"/rx-storage-dexie.html",children:"Dexie.js RxStorage"}),", abstracts these complexities, integrating reactive programming and providing a more streamlined experience for data management in React applications. Thus, RxDB offers a more intuitive approach, eliminating much of the manual overhead required with IndexedDB."]}),"\n",(0,n.jsx)(a.h3,{id:"using-rxdb-in-a-react-application",children:"Using RxDB in a React Application"}),"\n",(0,n.jsxs)(a.p,{children:["The process of integrating RxDB into a React application is straightforward. Begin by installing RxDB as a dependency:\n",(0,n.jsx)(a.code,{children:"npm install rxdb rxjs"}),"\nOnce installed, RxDB can be imported and initialized within your React components. The following code snippet illustrates a basic setup:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\nconst db = await createRxDatabase({\n  name: 'heroesdb',                   // <- name\n  storage: getRxStorageDexie(),       // <- RxStorage\n  password: 'myPassword',             // <- password (optional)\n  multiInstance: true,                // <- multiInstance (optional, default: true)\n  eventReduce: true,                  // <- eventReduce (optional, default: false)\n  cleanupPolicy: {}                   // <- custom cleanup policy (optional) \n});\n"})}),"\n",(0,n.jsx)(a.h3,{id:"using-rxdb-react-hooks",children:"Using RxDB React Hooks"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.a,{href:"https://github.com/cvara/rxdb-hooks",children:"rxdb-hooks"})," package provides a set of React hooks that simplify data management within components. These hooks leverage RxDB's reactivity to automatically update components when data changes occur. The following example demonstrates the usage of the ",(0,n.jsx)(a.code,{children:"useRxCollection"})," and ",(0,n.jsx)(a.code,{children:"useRxQuery"})," hooks to query and observe a collection:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-ts",children:"const collection = useRxCollection('characters');\nconst query = collection.find().where('affiliation').equals('Jedi');\nconst {\n  result: characters,\n  isFetching,\n  fetchMore,\n  isExhausted,\n} = useRxQuery(query, {\n  pageSize: 5,\n  pagination: 'Infinite',\n});\n\nif (isFetching) {\n  return 'Loading...';\n}\n\nreturn (\n  <CharacterList>\n    {characters.map((character, index) => (\n      <Character character={character} key={index} />\n    ))}\n    {!isExhausted && <button onClick={fetchMore}>load more</button>}\n  </CharacterList>\n);\n"})}),"\n",(0,n.jsx)(a.h3,{id:"different-rxstorage-layers-for-rxdb",children:"Different RxStorage Layers for RxDB"}),"\n",(0,n.jsx)(a.p,{children:"RxDB offers multiple storage layers, each backed by a different underlying technology. Developers can choose the storage layer that best suits their application's requirements. Some available options include:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/rx-storage-dexie.html",children:"Dexie.js RxStorage"}),": Built on top of Dexie.js, a popular IndexedDB wrapper."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"}),": The default RxDB storage layer, providing efficient data storage in modern browsers."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/rx-storage-opfs.html",children:"OPFS RxStorage"}),": Uses the Operational File System (OPFS) for storage, suitable for ",(0,n.jsx)(a.a,{href:"/electron-database.html",children:"Electron applications"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/rx-storage-memory.html",children:"Memory RxStorage"}),": Stores data in memory, primarily intended for testing and development purposes."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"}),": Stores data in an SQLite database. Can be used in a browser with react by using a SQLite database that was ",(0,n.jsx)(a.a,{href:"https://sqlite.org/wasm/doc/trunk/index.md",children:"compiled to WebAssembly"}),". Using SQLite in react might not be the best idea, because a compiled SQLite wasm file is about one megabyte of code that has to be loaded and rendered by your users. Using native browser APIs like IndexedDB and OPFS have shown to be a more optimal database solution for browser based react apps compared to SQLite."]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"synchronizing-data-with-rxdb-between-clients-and-servers",children:"Synchronizing Data with RxDB between Clients and Servers"}),"\n",(0,n.jsx)(a.p,{children:"The offline-first approach is a fundamental principle of RxDB's design. When dealing with client-server synchronization, RxDB ensures that changes made offline are captured and propagated to the server once connectivity is reestablished. This mechanism guarantees that data remains consistent across different client instances, even when operating in an occasionally connected environment."}),"\n",(0,n.jsxs)(a.p,{children:["RxDB offers a range of ",(0,n.jsx)(a.a,{href:"/replication.html",children:"replication plugins"})," that facilitate data synchronization between clients and servers. These plugins support various synchronization strategies, such as one-way replication, two-way replication, and custom conflict resolution. Developers can select the appropriate plugin based on their application's synchronization requirements."]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"../files/database-replication.png",alt:"database replication",width:"200"})}),"\n",(0,n.jsx)(a.h3,{id:"advanced-rxdb-features-and-techniques",children:"Advanced RxDB Features and Techniques"}),"\n",(0,n.jsxs)(a.p,{children:["Encryption of Local Data\nSecurity is paramount when handling sensitive user data. RxDB supports ",(0,n.jsx)(a.a,{href:"/articles/react-native-encryption.html",children:"data encryption"}),", ensuring that locally stored information remains protected from unauthorized access. This feature is particularly valuable when dealing with sensitive data in offline scenarios."]}),"\n",(0,n.jsx)(a.h3,{id:"indexing-and-performance-optimization",children:"Indexing and Performance Optimization"}),"\n",(0,n.jsx)(a.p,{children:"Efficient indexing is critical for achieving optimal database performance. RxDB provides mechanisms to define indexes on specific fields, enhancing query speed and reducing the computational overhead of data retrieval."}),"\n",(0,n.jsx)(a.h3,{id:"json-key-compression",children:"JSON Key Compression"}),"\n",(0,n.jsx)(a.p,{children:"RxDB employs JSON key compression to reduce storage space and improve performance. This technique minimizes the memory footprint of the database, making it suitable for applications with limited resources."}),"\n",(0,n.jsx)(a.h3,{id:"change-streams-and-event-handling",children:"Change Streams and Event Handling"}),"\n",(0,n.jsx)(a.p,{children:"RxDB enables developers to subscribe to change streams, which emit events whenever data changes occur. This functionality facilitates real-time event handling and provides opportunities for implementing features such as notifications and live updates."}),"\n",(0,n.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(a.p,{children:"In the realm of React application development, efficient data management is pivotal to delivering a seamless and engaging user experience. RxDB emerges as a compelling solution, seamlessly integrating reactive programming principles with sophisticated database capabilities. By adopting RxDB, React developers can harness its powerful features, including reactive data handling, offline-first support, and real-time synchronization. With RxDB as a foundational pillar, React applications can excel in responsiveness, scalability, and data integrity. As the landscape of web development continues to evolve, RxDB remains a steadfast companion for creating robust and dynamic React applications."}),"\n",(0,n.jsx)(a.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,n.jsx)(a.p,{children:"To explore more about RxDB and leverage its capabilities for browser database development, check out the following resources:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://github.com/pubkey/rxdb",children:"RxDB GitHub Repository"}),": Visit the official GitHub repository of RxDB to access the source code, documentation, and community support."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/quickstart.html",children:"RxDB Quickstart"}),": Get started quickly with RxDB by following the provided quickstart guide, which provides step-by-step instructions for setting up and using RxDB in your projects."]}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/react",children:"RxDB React Example at GitHub"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(6540);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);