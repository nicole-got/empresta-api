module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "ace_acesso",
        {
            ace_usr_id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "usr_usuario",
                    key: "usr_id",
                },
            },
            ace_permissao: {
                type:
                    "SET('administrador','associado','dependente','credenciado','recepcionista','empresa','franqueado','vendedor')",
                allowNull: false,
            },
            ace_ven_id: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                references: {
                    model: "ven_vendedor",
                    key: "ven_id",
                },
            },
            ace_uni_id: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                references: {
                    model: "uni_unidade",
                    key: "uni_id",
                },
            },
            ace_emp_id: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                references: {
                    model: "emp_empresa",
                    key: "emp_id",
                },
            },
            ace_status: {
                type: DataTypes.INTEGER(4),
                allowNull: false,
                defaultValue: "1",
            },
            ace_data_alteracao: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            ace_created_at: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
        },
        {
            tableName: "ace_acesso",
        }
    );
};
