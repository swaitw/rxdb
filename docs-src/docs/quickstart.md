---
title: 🚀 Quickstart
slug: quickstart.html
description: Learn how to build a realtime app with RxDB. Follow this quickstart for setup, schema creation, data operations, and real-time syncing.
---

# RxDB Quickstart

Welcome to the RxDB Quickstart. Here we'll learn how to create a simple real-time app with the RxDB database that is able to store and query data persistently in a browser and does realtime updates to the UI on changes.

<center>
    <a href="https://rxdb.info/">
        <img src="/files/logo/rxdb_javascript_database.svg" alt="JavaScript Embedded Database" width="220" />
    </a>
</center>

### 1. Installation
Install the RxDB library and the RxJS dependency:
   
```bash
npm install rxdb rxjs
```

### 2. Import 
Import RxDB and the dev-mode plugin, the Dexie-based storage (IndexedDB) and a schema validator:

```ts
import { addRxPlugin, createRxDatabase } from 'rxdb/plugins/core';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';
```


### 3. Dev-Mode

When you use RxDB in development, you should always enable the [dev-mode plugin](./dev-mode.md), which adds helpful checks and validations, and tells you if you do something wrong.

```ts
addRxPlugin(RxDBDevModePlugin);
```


### 4. Create a Database

For the database, here we use the [RxDB Dexie Storage](./rx-storage-dexie.md) that stores data inside of IndexedDB in a browser. For other JavaScript runtimes, you would not use the dexie storage but one of the other [RxDB Storages](./rx-storage.md).

```ts
const myDatabase = await createRxDatabase({
  name: 'mydatabase',
  storage: wrappedValidateAjvStorage({
    storage: getRxStorageDexie()
  })
});
```

### 5. Add a Collection

An RxDatabase contains [RxCollection](./rx-collection.md)s for storing and querying data. A collection is similar to an SQL table, and individual records are stored in the collection as JSON documents. An [RxDatabase](./rx-database.md) can have as many collections as you need.
Add a collection with a [schema](./rx-schema.md) to the database:

```ts
await myDatabase.addCollections({
    // name of the collection
    todos: {
        // we use the JSON-schema standard
        schema: {
            version: 0,
            primaryKey: 'id',
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    maxLength: 100 // <- the primary key must have maxLength
                },
                name: {
                    type: 'string'
                },
                done: {
                    type: 'boolean'
                },
                timestamp: {
                    type: 'string',
                    format: 'date-time'
                }
            },
            required: ['id', 'name', 'done', 'timestamp']        
        }
    }
});
```

### 6. Insert a document

Now that we have an RxCollection we can store some [documents](./rx-document.md) in it.

```ts
const myDocument = await myDatabase.todos.insert({
    id: 'todo1',
    name: 'Learn RxDB',
    done: false,
    timestamp: new Date().toISOString()
});
```

### 7. Run a Query

Execute a [query](./rx-query.md) that returns all found documents once:

```ts
const foundDocuments = await myDatabase.todos.find({
    selector: {
        done: {
            $eq: false
        }
    }
}).exec();
```


### 8. Update a Document

In the first found document, set `done` to `true`:

```ts
const firstDocument = foundDocuments[0];
await firstDocument.patch({
    done: true
});
```

### 9. Delete a document

Delete the document so that it can no longer be found in queries:

```ts
await firstDocument.remove();
```

### 10. Observe a Query

Subscribe to data changes so that your UI is always up-to-date with the data stored on disk. RxDB allows you to subscribe to data changes even when the change happens in another part of your application, another browser tab, or during database [replication/synchronization](./replication.md):

```ts
const observable = myDatabase.todos.find({
    selector: {
        done: {
            $eq: false
        }
    }
}).$ // get the observable via RxQuery.$;
observable.subscribe(notDoneDocs => {
    console.log('Currently have ' + notDoneDocs.length + ' things to do');
    // -> here you would re-render your app to show the updated document list
});
```

### 11. Observe a Document value

You can also subscribe to the fields of a single RxDocument. Add the `$` sign to the desired field and then subscribe to the returned observable.

```ts
myDocument.done$.subscribe(isDone => {
    console.log('done: ' + isDone);
});
```


### 12. Start the Replication

RxDB has multiple [replication plugins](./replication.md) to replicate database state with a server.
The easiest way to replicate data between your clients' devices is the [WebRTC replication plugin](./replication-webrtc.md) that replicates data between devices without a centralized server. This makes it easy to try out replication without having to host anything:

```ts
import {
    replicateWebRTC,
    getConnectionHandlerSimplePeer
} from 'rxdb/plugins/replication-webrtc';
replicateWebRTC({
    collection: myDatabase.todos,
    connectionHandlerCreator: getConnectionHandlerSimplePeer({}),
    topic: '', // <- set any app-specific room id here.
    secret: 'mysecret',
    pull: {},
    push: {}
})
```


## Next steps

You are now ready to dive deeper into RxDB. 
- Start reading the full documentation [here](./install.md).
- There is a full implementation of the [quickstart guide](https://github.com/pubkey/rxdb-quickstart) so you can clone that repository and play with the code.
- For frameworks and runtimes like Angular, React Native and others, check out the list of [example implementations](https://github.com/pubkey/rxdb/tree/master/examples).
- Also please continue reading the documentation, join the community on our [Discord chat](/chat/), and star the [GitHub repo](https://github.com/pubkey/rxdb).
- If you are using RxDB in a production environment and are able to support its continued development, please take a look at the [👑 Premium package](/premium/) which includes additional plugins and utilities.
