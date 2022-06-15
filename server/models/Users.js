module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    namaDepan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    namaBelakang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenisKelamin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    community_id: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Likes, {
      onDelete: "cascade",
    });
  };

  return Users;
};
