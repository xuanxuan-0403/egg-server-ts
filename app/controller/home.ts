// app/controller/home.ts
import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async index() {
        const { ctx } = this;
        ctx.body = '<h2>hi, egg!</h2>';
    }
}
