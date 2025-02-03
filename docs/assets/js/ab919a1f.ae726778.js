"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[6491],{4760:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var t=i(4848),s=i(8453);const n={title:"Embedded Database, Real-time Speed - RxDB",slug:"embedded-database.html",description:"Unleash the power of embedded databases with RxDB. Explore real-time replication, offline access, and reactive queries for modern JavaScript apps."},r="Using RxDB as an Embedded Database",l={id:"articles/embedded-database",title:"Embedded Database, Real-time Speed - RxDB",description:"Unleash the power of embedded databases with RxDB. Explore real-time replication, offline access, and reactive queries for modern JavaScript apps.",source:"@site/docs/articles/embedded-database.md",sourceDirName:"articles",slug:"/articles/embedded-database.html",permalink:"/articles/embedded-database.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Embedded Database, Real-time Speed - RxDB",slug:"embedded-database.html",description:"Unleash the power of embedded databases with RxDB. Explore real-time replication, offline access, and reactive queries for modern JavaScript apps."},sidebar:"tutorialSidebar",previous:{title:"Empower Web Apps with Reactive RxDB Data-base",permalink:"/articles/data-base.html"},next:{title:"Supercharge Flutter Apps with the RxDB Database",permalink:"/articles/flutter-database.html"}},d={},o=[{value:"What is an Embedded Database?",id:"what-is-an-embedded-database",level:2},{value:"Embedded Database in UI Applications",id:"embedded-database-in-ui-applications",level:2},{value:"Why RxDB as an Embedded Database for Real-time Applications",id:"why-rxdb-as-an-embedded-database-for-real-time-applications",level:2},{value:"Follow Up",id:"follow-up",level:2}];function c(e){const a={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"using-rxdb-as-an-embedded-database",children:"Using RxDB as an Embedded Database"}),"\n",(0,t.jsxs)(a.p,{children:["In modern UI applications, efficient data storage is a crucial aspect for seamless user experiences. One powerful solution for achieving this is by utilizing an embedded database. In this article, we will explore the concept of an embedded database and delve into the benefits of using ",(0,t.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"})," as an embedded database in UI applications. We will also discuss why RxDB stands out as a robust choice for real-time applications with embedded database functionality."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("a",{href:"https://rxdb.info/",children:(0,t.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript Embedded Database",width:"220"})})}),"\n",(0,t.jsx)(a.h2,{id:"what-is-an-embedded-database",children:"What is an Embedded Database?"}),"\n",(0,t.jsxs)(a.p,{children:["An embedded database refers to a client-side database system that is integrated directly within an application. It is designed to operate within the client environment, such as a web browser or a ",(0,t.jsx)(a.a,{href:"/articles/mobile-database.html",children:"mobile"})," app. This approach eliminates the need for a separate database server and allows the database to run locally on the client device."]}),"\n",(0,t.jsx)(a.h2,{id:"embedded-database-in-ui-applications",children:"Embedded Database in UI Applications"}),"\n",(0,t.jsx)(a.p,{children:"In the context of UI applications, an embedded database serves as a local data storage solution. It enables applications to efficiently manage data, facilitate real-time updates, and enhance performance. Let's explore some of the benefits of using an embedded database compared to a traditional server database:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Replicating database state becomes easier: Implementing real-time data synchronization and replication is simpler with an embedded database compared to complex REST routes. The embedded nature allows for efficient replication of the database state across multiple instances of the application."}),"\n",(0,t.jsx)(a.li,{children:"Use the database for caching: An embedded database can be utilized for caching frequently accessed data. This caching mechanism enhances performance and reduces the need for repeated network requests, resulting in faster data retrieval."}),"\n",(0,t.jsx)(a.li,{children:"Building real-time applications is easier with local data: By leveraging local data storage, real-time applications can easily update the user interface in response to data changes. This approach simplifies the development of real-time features and enhances the responsiveness of the application."}),"\n",(0,t.jsxs)(a.li,{children:["Store local data with ",(0,t.jsx)(a.a,{href:"/encryption.html",children:"encryption"}),": Embedded databases, like RxDB, offer the ability to store local data with encryption. This ensures that sensitive information remains protected even when stored locally on the client device."]}),"\n",(0,t.jsx)(a.li,{children:"Data is offline accessible: With an embedded database, data remains accessible even when the application is offline. Users can continue to interact with the application and access their data seamlessly, irrespective of their internet connectivity."}),"\n",(0,t.jsx)(a.li,{children:"Faster initial application start time: Since the data is already stored locally, there is no need for initial data fetching from a remote server. This significantly reduces the application's startup time and allows users to engage with the application more quickly."}),"\n",(0,t.jsx)(a.li,{children:"Improved scalability with local queries: Embedded databases, such as RxDB, perform queries locally on the client device instead of relying on server round-trips. This reduces latency and enhances scalability, particularly when dealing with large datasets or high query volumes."}),"\n",(0,t.jsx)(a.li,{children:"Seamless integration with JavaScript frameworks: Embedded databases, including RxDB, integrate seamlessly with popular JavaScript frameworks like Angular, React.js, Vue.js, and Svelte. This compatibility allows developers to leverage the capabilities of these frameworks while benefiting from embedded database functionality."}),"\n",(0,t.jsx)(a.li,{children:"Running queries locally has low latency: With an embedded database, queries are executed locally on the client device, resulting in minimal latency. This improves the overall performance and responsiveness of the application."}),"\n",(0,t.jsx)(a.li,{children:"Data is portable and always accessible by the user: Embedded databases enable data portability, allowing users to seamlessly transition between devices while maintaining their data and application state. This ensures that data is always accessible and available to the user."}),"\n",(0,t.jsxs)(a.li,{children:["Using a ",(0,t.jsx)(a.a,{href:"/articles/local-database.html",children:"local database"})," for state management: Instead of relying on additional state management libraries like Redux or NgRx, an embedded database can be used for local state management. This simplifies state management and ensures data consistency within the application."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"why-rxdb-as-an-embedded-database-for-real-time-applications",children:"Why RxDB as an Embedded Database for Real-time Applications"}),"\n",(0,t.jsx)(a.p,{children:"RxDB is a JavaScript-based embedded database that offers numerous advantages for building real-time applications. Let's explore why RxDB is a compelling choice:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"/rx-query.html",children:"Observable Queries"})," (RxJS): RxDB leverages the power of Observables through RxJS, enabling developers to create queries that automatically update the user interface on data changes. This reactive approach simplifies UI updates and ensures real-time synchronization of data."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"/articles/json-database.html",children:"NoSQL JSON Documents"})," for UIs: RxDB utilizes NoSQL (JSON) documents as its data model, aligning seamlessly with the requirements of modern UI development. JavaScript's native support for JSON objects makes NoSQL documents a natural fit for UI-driven applications."]}),"\n",(0,t.jsx)(a.li,{children:"Better TypeScript Support Compared to SQL: RxDB's NoSQL approach provides excellent TypeScript support. The flexibility of working with JSON objects enables robust typing and enhanced development experiences, ensuring type safety and reducing runtime errors."}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"/rx-document.html",children:"Observable Document Fields"}),": RxDB allows developers to observe individual fields within documents. This granularity enables efficient tracking of specific data changes and facilitates targeted UI updates, enhancing performance and responsiveness."]}),"\n",(0,t.jsx)(a.li,{children:"Made in JavaScript, Optimized for JavaScript Applications: Being built entirely in JavaScript, RxDB is optimized for JavaScript applications. It leverages JavaScript's capabilities and integrates seamlessly with JavaScript frameworks and libraries, making it a natural choice for JavaScript developers."}),"\n",(0,t.jsxs)(a.li,{children:["Optimized Observed Queries with the ",(0,t.jsx)(a.a,{href:"https://github.com/pubkey/event-reduce",children:"EventReduce Algorithm"}),": RxDB incorporates the EventReduce algorithm to optimize observed queries. This algorithm reduces the number of emitted events during query execution, resulting in enhanced query performance and reduced overhead."]}),"\n",(0,t.jsx)(a.li,{children:"Built-in Multi-tab Support: RxDB provides built-in multi-tab support, allowing multiple instances of an application to share and synchronize data seamlessly. This feature enables collaborative and real-time scenarios across multiple browser tabs or windows."}),"\n",(0,t.jsxs)(a.li,{children:["Handling of Schema Changes across Multiple Client Devices: With RxDB, handling schema changes across multiple client devices becomes straightforward. RxDB's schema ",(0,t.jsx)(a.a,{href:"/migration-schema.html",children:"migration capabilities"})," ensure that applications can seamlessly adapt to evolving data structures, providing a consistent experience across different devices."]}),"\n",(0,t.jsx)(a.li,{children:"Storing Documents Compressed: RxDB offers the ability to store documents in a compressed format. This reduces the storage footprint and improves performance, especially when dealing with large datasets."}),"\n",(0,t.jsxs)(a.li,{children:["Flexible Storage Layer and Cross-platform Compatibility: RxDB provides a flexible storage layer that can be reused across various platforms, including ",(0,t.jsx)(a.a,{href:"/electron-database.html",children:"Electron.js"}),", ",(0,t.jsx)(a.a,{href:"/react-native-database.html",children:"React Native"}),", hybrid apps (via Capacitor.js), and browsers. This cross-platform compatibility simplifies development and enables code reuse across different environments."]}),"\n",(0,t.jsxs)(a.li,{children:["Replication Algorithm for Backend Compatibility: RxDB's replication algorithm is open-source and can be made compatible with various backend solutions, such as self-hosted servers, Firebase, ",(0,t.jsx)(a.a,{href:"/replication-couchdb.html",children:"CouchDB"}),", NATS, WebSockets, and more. This flexibility allows developers to choose their preferred backend infrastructure while benefiting from RxDB's embedded database capabilities."]}),"\n"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("a",{href:"https://rxdb.info/",children:(0,t.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript Embedded Database",width:"220"})})}),"\n",(0,t.jsx)(a.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,t.jsxs)(a.p,{children:["To further explore ",(0,t.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"})," and leverage its capabilities as an embedded database, the following resources can be helpful:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/pubkey/rxdb",children:"RxDB GitHub Repository"}),": Visit the official GitHub repository of RxDB to access the source code, documentation, and community support."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"/quickstart.html",children:"RxDB Quickstart"}),": Get started quickly with RxDB by following the provided quickstart guide, which offers step-by-step instructions for setting up and using RxDB in your projects."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["By utilizing ",(0,t.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"})," as an embedded database in UI applications, developers can harness the power of efficient data management, real-time updates, and enhanced user experiences. RxDB's features and benefits make it a compelling choice for building modern, responsive, and scalable applications."]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,a,i)=>{i.d(a,{R:()=>r,x:()=>l});var t=i(6540);const s={},n=t.createContext(s);function r(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);