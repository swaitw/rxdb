---
title: Lightning-Fast Browser DB - RxDB Dexie RxStorage
slug: rx-storage-dexie.html
description: Use Dexie.js to power RxDB in the browser. Enjoy quick setup, Dexie addons, and reliable storage for small apps or prototypes.
---

# RxStorage Dexie.js

To store the data inside of IndexedDB in the browser, you can use the [Dexie.js](https://github.com/dexie/Dexie.js) [RxStorage](./rx-storage.md). Dexie.js is a minimal wrapper around IndexedDB and the Dexie.js RxStorage wraps that again to store RxDB data in the browser. For side projects and prototypes that run in a browser, you should use the dexie RxStorage as a default. For professional projects that care about performance and stability, use the [IndexedDB RxStorage](./rx-storage-indexeddb.md) instead.

## Pros 
  - Can use [Dexie.js addons](https://dexie.org/docs/Tutorial/Building-Addons).

## Limitations
- Does not allow to use non-required fields as index, because that is [not possible](https://github.com/pubkey/rxdb/pull/6643#issuecomment-2505310082) with dexie.js. Use the [IndexedDB RxStorage](./rx-storage-indexeddb.md) if you need that.
- Does not use a [Batched Cursor](./slow-indexeddb.md#batched-cursor) or [custom indexes](./slow-indexeddb.md#custom-indexes) which makes queries slower compared to the [IndexedDB RxStorage](./rx-storage-indexeddb.md).
- Does not support the [Storage Buckets API](./rx-storage-indexeddb.md#storage-buckets)

## Performance comparison with other RxStorage plugins

The performance of the Dexie.js RxStorage is good enough for most use cases but other storages can have way better performance metrics:

<p align="center">
  <img src="./files/rx-storage-performance-browser.png" alt="RxStorage performance - browser Dexie.js" width="700" />
</p>

## Usage

```ts
import { createRxDatabase } from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

const db = await createRxDatabase({
    name: 'exampledb',
    storage: getRxStorageDexie()
});
```


## Overwrite/Polyfill the native IndexedDB

Node.js has no IndexedDB API. To still run the Dexie `RxStorage` in Node.js, for example to run unit tests, you have to polyfill it.
You can do that by using the [fake-indexeddb](https://github.com/dumbmatter/fakeIndexedDB) module and pass it to the `getRxStorageDexie()` function.

```ts
import { createRxDatabase } from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

//> npm install fake-indexeddb --save
const fakeIndexedDB = require('fake-indexeddb');
const fakeIDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange');

const db = await createRxDatabase({
    name: 'exampledb',
    storage: getRxStorageDexie({
        indexedDB: fakeIndexedDB,
        IDBKeyRange: fakeIDBKeyRange
    })
});

```


## Using addons

Dexie.js has its own plugin system with [many plugins](https://dexie.org/docs/DerivedWork#known-addons) for encryption, replication or other use cases. With the Dexie.js `RxStorage` you can use the same plugins by passing them to the `getRxStorageDexie()` function.

```ts
const db = await createRxDatabase({
    name: 'exampledb',
    storage: getRxStorageDexie({
        addons: [ /* Your Dexie.js plugins */ ]
    })
});
```

## Disabling the non-premium console log

We want to be transparent with our community, and you'll notice a console message when using the free Dexie.js based RxStorage implementation. This message serves to inform you about the availability of faster storage solutions within our [👑 Premium Plugins](/premium/). We understand that this might be a minor inconvenience, and we sincerely apologize for that. However, maintaining and improving RxDB requires substantial resources, and our premium users help us ensure its sustainability. If you find value in RxDB and wish to remove this message, we encourage you to explore our premium storage options, which are optimized for professional use and production environments. Thank you for your understanding and support.

If you already have premium access and want to use the Dexie.js [RxStorage](./rx-storage.md) without the log, you can call the `setPremiumFlag()` function to disable the log.

```js
import { setPremiumFlag } from 'rxdb-premium/plugins/shared';
setPremiumFlag();
```
