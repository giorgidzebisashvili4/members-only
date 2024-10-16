// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    membership_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  return User;
};

// models/message.js
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    text: DataTypes.TEXT,
  });
  Message.associate = (models) => {
    Message.belongsTo(models.User, { foreignKey: "author_id" });
  };
  return Message;
};
