// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportDangjianDangjian from '../../../app/controller/dangjian/dangjian';
import ExportLoginLogin from '../../../app/controller/login/login';
import ExportQuestionQuestion from '../../../app/controller/question/question';
import ExportUploadUpload from '../../../app/controller/upload/upload';
import ExportLoginTypesLoginType from '../../../app/controller/login/types/login-type';
import ExportMainSystemSystem from '../../../app/controller/main/system/system';
import ExportQuestionDataQuestionData from '../../../app/controller/question/data/question-data';
import ExportQuestionTypesQuestionType from '../../../app/controller/question/types/question-type';
import ExportUploadTypesUploadType from '../../../app/controller/upload/types/upload-type';

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
    main: {
      system: {
        system: ExportMainSystemSystem;
      }
    }
  }
}
