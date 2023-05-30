// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportDangjianDangjian from '../../../app/controller/dangjian/dangjian';
import ExportLoginLogin from '../../../app/controller/login/login';
import ExportQuestionQuestion from '../../../app/controller/question/question';
import ExportUploadUpload from '../../../app/controller/upload/upload';
import ExportUserUser from '../../../app/controller/user/user';
import ExportLoginTypesLoginType from '../../../app/controller/login/types/login-type';
import ExportLoginTypesRouterData from '../../../app/controller/login/types/router-data';
import ExportLoginTypesRouterType from '../../../app/controller/login/types/router-type';
import ExportMainSystemSystem from '../../../app/controller/main/system/system';
import ExportQuestionDataQuestionData from '../../../app/controller/question/data/question-data';
import ExportQuestionTypesQuestionType from '../../../app/controller/question/types/question-type';
import ExportUploadTypesUploadType from '../../../app/controller/upload/types/upload-type';
import ExportUserTypesLoginType from '../../../app/controller/user/types/login-type';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    dangjian: {
      dangjian: ExportDangjianDangjian;
    }
    login: {
      login: ExportLoginLogin;
      types: {
        loginType: ExportLoginTypesLoginType;
        routerData: ExportLoginTypesRouterData;
        routerType: ExportLoginTypesRouterType;
      }
    }
    question: {
      question: ExportQuestionQuestion;
      data: {
        questionData: ExportQuestionDataQuestionData;
      }
      types: {
        questionType: ExportQuestionTypesQuestionType;
      }
    }
    upload: {
      upload: ExportUploadUpload;
      types: {
        uploadType: ExportUploadTypesUploadType;
      }
    }
    user: {
      user: ExportUserUser;
      types: {
        loginType: ExportUserTypesLoginType;
      }
    }
    main: {
      system: {
        system: ExportMainSystemSystem;
      }
    }
  }
}
