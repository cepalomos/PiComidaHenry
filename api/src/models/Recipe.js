const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type:DataTypes.UUID,
      defaulValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.TEXT,
    },
    score:{
      type: DataTypes.INTEGER
    },
    healthScore:{
      type: DataTypes.INTEGER
    },
    steps:{
      type: DataTypes.TEXT
    },
  });
};
