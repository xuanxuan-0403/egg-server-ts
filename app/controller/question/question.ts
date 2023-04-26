// app/controller/question.ts
import { Controller } from 'egg';
import { questions } from './data/data';

export default class QuestionController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = {
            code: 0,
            status: 200,
            message: 'egg! 7001/list success!',
            questions: questions,
        };
    }
}
