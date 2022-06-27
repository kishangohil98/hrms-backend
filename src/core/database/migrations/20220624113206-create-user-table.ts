'use strict';
import { QueryInterface, DataTypes } from 'sequelize';

export const up = async ({
  context: queryInterface,
}: {
  context: QueryInterface;
}) => {
  return queryInterface.createTable('Users', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'email',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password',
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['male', 'female'],
      allowNull: false,
      field: 'gender',
    },
    createdAt: {
      field: 'created_at_',
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at_',
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      field: 'deleted_at_',
      allowNull: true,
      type: DataTypes.DATE,
    },
  });
};

export const down = async ({
  context: queryInterface,
}: {
  context: QueryInterface;
}) => {
  /**
   * Add reverting commands here.
   */
  await queryInterface.dropTable('User');
};
