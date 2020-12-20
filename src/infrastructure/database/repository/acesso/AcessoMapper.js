const clear = require("../support/ClearObject");
const Acesso = require("../../../../domain/entitities/Acesso");

const AcessoMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const {
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id,
            ace_status,
            ace_data_alteracao,
            ace_created_at

        } = databaseObject;
        return new Acesso(
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id,
            ace_status,
            ace_data_alteracao,
            ace_created_at
        );
    },
    toEntityPermissao: (databaseObject) => {
        if (!databaseObject) return null;
        const {
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id,
            ace_status,
            ace_data_alteracao,
            ace_created_at

        } = databaseObject;
        const acessos = new Acesso(
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id,
            ace_status,
            ace_data_alteracao,
            ace_created_at
        );
        return acessos.ace_permissao
    },
    toDatabase: (domainEntity) => {
        
        const {
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id,
            ace_status,
        } = domainEntity;
        
        const acessoMapper = {
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id,
            ace_status,
        };

        clear(acessoMapper);
        return acessoMapper;
    },
    toDatabaseSave: (domainEntity) => {
        const {
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id,
            ace_status,
        } = domainEntity;
        
        const acessoMapper = {
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id,
            ace_status,
        };

        clear(acessoMapper);
        return acessoMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = AcessoMapper;
