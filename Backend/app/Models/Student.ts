
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateInput, DateTime } from 'luxon'

export default class Student extends BaseModel {

  @column({ isPrimary: true })
  public id: number
  @column()
  public first_name : string
  @column()
  public last_name : string
  @column.dateTime()
  public dob : DateTime
  @column()
  public gender : string
  // @column()
  // public address : string
  // @column()
  // public phone : string
  // @column()
  // public email : string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}