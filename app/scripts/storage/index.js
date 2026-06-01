import { Launcher } from 'comp/launcher';
import { StorageCache } from 'storage/impl/storage-cache';
import { StorageFile } from 'storage/impl/storage-file';
import { StorageFileCache } from 'storage/impl/storage-file-cache';

const BuiltInStorage = {
    file: new StorageFile(),
    cache: Launcher ? new StorageFileCache() : new StorageCache()
};

const Storage = BuiltInStorage;

export { Storage };
