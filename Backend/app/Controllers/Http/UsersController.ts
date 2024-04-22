import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index ({} : HttpContextContract) {
        return 'hello';
    }
    public async show ({params} : HttpContextContract) {
        return `user ${params.id}`;
    }
    public async create({params} : HttpContextContract) {
        return `user ${params.id}`;
    }
    public async update({params} : HttpContextContract) {
        return `user ${params.id}`;
    }
}
