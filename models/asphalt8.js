const modeloVeiculos = {
    queryGetVeiculos: "SELECT * FROM Asphalt8",
    queryVeiculosByID : `SELECT * FROM Asphalt8 WHERE ID=?`,
    queryDeleteVeiculoByID : `UPDATE Asphalt8 SET Activo='N' WHERE ID=?`,
    queryVeiculoExists : `SELECT Nombre FROM Asphalt8 WHERE Nombre = ?`,
    queryAddVeiculo:`
    INSERT INTO Asphalt8(
        Marca,
        Nombre,
        Tipo,
        Color,
        Clase,
        RangoInicial,
        RangoMax,
        Aceleracion,
        VelocidadMax,
        Manejo,
        Nitro,
        Precio,
        Activo
    )VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `,
    queryGetVeiculoInfo : `SELECT Color,Clase,RangoInicial,RangoMax,Aceleracion,VelocidadMax,Manejo,Nitro,Precio,Activo FROM Asphalt8 WHERE Nombre = ?`,
    queryUpdateByVeiculo : `
    UPDATE Asphalt8 SET
        Color=?,
        Clase=?,
        RangoInicial=?,
        RangoMax=?,
        Aceleracion=?,
        VelocidadMax=?,
        Manejo=?,
        Nitro=?,
        Precio=?,
        Activo=?
    WHERE Nombre= ?
    `
}

module.exports=modeloVeiculos