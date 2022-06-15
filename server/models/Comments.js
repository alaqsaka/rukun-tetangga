module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    namaDepan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    namaBelakang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
