// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportUploadUpload from '../../../app/service/upload/upload';
import ExportUserUser from '../../../app/service/user/user';
import ExportUploadTypesUploadType from '../../../app/service/upload/types/upload-type';
import ExportUserTypesUserType from '../../../app/service/user/types/user-type';

declare module 'egg' {
  interface IService {
    upload: {
      upload: AutoInstanceType<typeof ExportUploadUpload>;
      types: {
        uploadType: AutoInstanceType<typeof ExportUploadTypesUploadType>;
      }
    }
    user: {
      user: AutoInstanceType<typeof ExportUserUser>;
      types: {
        userType: AutoInstanceType<typeof ExportUserTypesUserType>;
      }
    }
  }
}
