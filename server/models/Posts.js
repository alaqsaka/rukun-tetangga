module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    namaKegiatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsiKegiatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tempatKegiatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggalKegiatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    waktuKegiatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    community_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      onDelete: "cascade",
    });

    Posts.hasMany(models.Likes, {
      onDelete: "cascade",
    });

    // Posts.hasOne(models.Community, {
    //   onDelete: "cascade",
    // });
  };

  return Posts;
};
