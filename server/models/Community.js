module.exports = (sequelize, DataTypes) => {
  const Community = sequelize.define("Community", {
    community_name: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
    },
    community_address: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
    },
    community_id: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
    },
  });

  Community.associate = (models) => {
    Community.hasMany(models.Posts, {
      onDelete: "cascade",
    });
  };

  return Community;
};
