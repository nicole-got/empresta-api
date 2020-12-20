module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "usuario",
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            cpf: {
                type: DataTypes.STRING(14),
                allowNull: false,
            },
            data_nascimento: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            mae: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(250),
                allowNull: false,
            },
            senha: {
                type: DataTypes.STRING(250),
                allowNull: false,
            },
            telefone: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            cep: {
                type: DataTypes.STRING(10),
                allowNull: true,
            },
            logradouro: {
                type: DataTypes.STRING(60),
                allowNull: true,
            },
            numero: {
                type: DataTypes.STRING(10),
                allowNull: true,
            },
            cidade: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            estado: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            matricula: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            id_proposta: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
            },
            fase_proposta: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            pendencia: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            situacao: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            protocolo: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            instituicao: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            convenio: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            servico: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            valor_liberado: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            valor_parcela: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            quantidade_parcela: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
            },
            data_venda: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            responsavel_cancelamento: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            data_cancelamento: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            motivo_cancelamento: {
                type: DataTypes.STRING(250),
                allowNull: true,
            },
        },
        {
            tableName: "usuario",
        }
    );
};
