import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Student from 'App/Models/Student';

const newPostSchema = schema.create({
  first_name : schema.string(),
  last_name : schema.string(),
  dob: schema.date(),
  gender: schema.string()
})

export default class StudentsController {
  public async index({}: HttpContextContract) {
    const info = await Student.query().select('*');
    return info;
  }

  public async store({request}: HttpContextContract) {
    try {
       const payload = await request.validate({ schema: newPostSchema })
       return  await Student.create(payload);
       
    } 
    catch (error) {
      return error;
    }
  }

  public async show({params}: HttpContextContract) {
    try {
      const info = await Student.query().select('*').where('id', params.id);
      if (info.length === 0) throw ('NOT FOUND IN DATABSE') 
      return info;
    } catch (error) {
      return error;
    }
  }

  public async update({params, request}: HttpContextContract) {
    try {
      const data = request.all();
      await Student.query().where('id', params.id).update(data);
      return { message: 'Updated successfully..!!' };
    } catch (error) {
      return error;
    }
  }

  public async destroy({params}: HttpContextContract) {
    try {
      await Student.query().where('id', params.id).delete();
      return { message: 'Deleted successfully..!!' };
    } catch (error) {
      return error;
    }
  }
}
