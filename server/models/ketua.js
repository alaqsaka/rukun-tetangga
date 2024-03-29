module.exports = (sequelize, DataTypes) => {
  const Ketua = sequelize.define("Ketua", {
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

  Ketua.associate = (models) => {
    Ketua.hasOne(models.Community, {
      onDelete: "cascade",
    });
  };

  return Ketua;
};
