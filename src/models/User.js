const { Post } = require("./Post");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      nickname: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birth: DataTypes.DATE,
      username: DataTypes.STRING,
      img: DataTypes.STRING,
      website: DataTypes.STRING,
      bio: DataTypes.STRING,
      gender: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return User;
};
