import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'Users',
  timestamps: true,
  paranoid: true,
})
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    field: 'id',
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'name',
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    field: 'email',
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'password',
  })
  password: string;

  @Column({
    type: DataType.ENUM,
    values: ['male', 'female'],
    allowNull: false,
    field: 'gender',
  })
  gender: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    field: 'createdAt',
  })
  public createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    field: 'updatedAt',
  })
  public updatedAt: Date;

  @DeletedAt
  @Column({
    type: DataType.DATE,
    field: 'deletedAt',
  })
  public deletedAt: Date;

  /**
   // NOTE: For the reference
   @ForeignKey(() => User)
   @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    userId: number;
    
    @BelongsTo(() => User)
    user: User;
    */
}
