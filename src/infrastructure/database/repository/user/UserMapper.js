const clear = require("../support/ClearObject");
const User = require("../../../../domain/entitities/User");

const UserMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const {
            id ,
            nome ,
            cpf ,
            data_nascimento,
            mae,
            email,
            senha,
            telefone,
            cep,
            logradouro,
            numero,
            cidade,
            estado,
            matricula,
            id_proposta,
            fase_proposta,
            pendencia,
            situacao,
            protocolo,
            instituicao,
            convenio,
            servico,
            valor_liberado,
            valor_parcela,
            quantidade_parcela,
            data_venda,
            responsavel_cancelamento,
            data_cancelamento,
            motivo_cancelamento

        } = databaseObject;
        return new User(
            id ,
            nome ,
            cpf ,
            data_nascimento,
            mae,
            email,
            senha,
            telefone,
            cep,
            logradouro,
            numero,
            cidade,
            estado,
            matricula,
            id_proposta,
            fase_proposta,
            pendencia,
            situacao,
            protocolo,
            instituicao,
            convenio,
            servico,
            valor_liberado,
            valor_parcela,
            quantidade_parcela,
            data_venda,
            responsavel_cancelamento,
            data_cancelamento,
            motivo_cancelamento
        );
    },
    toDatabase: (domainEntity) => {
        
        const {
            id ,
            nome ,
            cpf ,
            data_nascimento,
            mae,
            email,
            senha,
            telefone,
            cep,
            logradouro,
            numero,
            cidade,
            estado,
            matricula,
            id_proposta,
            fase_proposta,
            pendencia,
            situacao,
            protocolo,
            instituicao,
            convenio,
            servico,
            valor_liberado,
            valor_parcela,
            quantidade_parcela,
            data_venda,
            responsavel_cancelamento,
            data_cancelamento,
            motivo_cancelamento
        } = domainEntity;
        
        const userMapper = {
            id ,
            nome ,
            cpf ,
            data_nascimento,
            mae,
            email,
            senha,
            telefone,
            cep,
            logradouro,
            numero,
            cidade,
            estado,
            matricula,
            id_proposta,
            fase_proposta,
            pendencia,
            situacao,
            protocolo,
            instituicao,
            convenio,
            servico,
            valor_liberado,
            valor_parcela,
            quantidade_parcela,
            data_venda,
            responsavel_cancelamento,
            data_cancelamento,
            motivo_cancelamento
        };

        clear(userMapper);
        return userMapper;
    },
    toDatabaseSave: (domainEntity) => {
        const {
            id ,
            nome ,
            cpf ,
            data_nascimento,
            mae,
            email,
            senha,
            telefone,
            cep,
            logradouro,
            numero,
            cidade,
            estado,
            matricula,
            id_proposta,
            fase_proposta,
            pendencia,
            situacao,
            protocolo,
            instituicao,
            convenio,
            servico,
            valor_liberado,
            valor_parcela,
            quantidade_parcela,
            data_venda,
            responsavel_cancelamento,
            data_cancelamento,
            motivo_cancelamento
        } = domainEntity;
        
        const userMapper = {
            id ,
            nome ,
            cpf ,
            data_nascimento,
            mae,
            email,
            senha,
            telefone,
            cep,
            logradouro,
            numero,
            cidade,
            estado,
            matricula,
            id_proposta,
            fase_proposta,
            pendencia,
            situacao,
            protocolo,
            instituicao,
            convenio,
            servico,
            valor_liberado,
            valor_parcela,
            quantidade_parcela,
            data_venda,
            responsavel_cancelamento,
            data_cancelamento,
            motivo_cancelamento
        };

        clear(userMapper);
        return userMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = UserMapper;
