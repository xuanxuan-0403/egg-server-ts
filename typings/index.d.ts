import 'egg';
import { Application } from 'egg';
import { EggMySQL } from 'egg-mysql';
import type EggJwt from 'egg-jwt';

declare module 'egg' {
    interface Application {
        mysql: EggMySQL;
        cache: any;
        jwt: EggJwt;
    }
}
