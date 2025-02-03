import { EnvironmentParams } from './environment.d';
import {
  getRxStorageDexie
} from 'rxdb/plugins/storage-dexie';
import {
  SYNC_PORT,
  DATABASE_NAME
} from '../shared';
import { addRxPlugin } from 'rxdb';
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';

export const environment: EnvironmentParams = {
  name: 'web-prod',
  production: true,
  isCapacitor: false,
  isServerSideRendering: false,
  multiInstance: true,
  rxdbSyncUrl: 'http://' + window.location.hostname + ':' + SYNC_PORT + '/' + DATABASE_NAME,
  addRxDBPlugins() {
    addRxPlugin(RxDBLeaderElectionPlugin);
  },
  getRxStorage() {
    return getRxStorageDexie();
  },
};
