import { Table, Model, Column, DataType } from "sequelize-typescript";

export interface ExampleAttributes  {
  id?: number,
  name?: string,
  description?: string,
  createdAt?: Date,
  updatedAt?: Date,
};

@Table({
  tableName: "examples",
  timestamps: true,
})

export class Example extends Model<ExampleAttributes> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;
}




