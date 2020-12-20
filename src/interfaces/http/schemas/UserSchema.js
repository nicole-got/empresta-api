module.exports = ({ joi, createError }) => ({
    validate: (dataToValidate) => {
        const schema = joi.object().keys({
            id: joi.number(),
            nome: joi.string().max(100),
            cpf: joi.string().max(14),
            data_nascimento: joi.string().max(50),
            mae: joi.string().max(100),
            email: joi.string().max(250),
            senha: joi.string().max(250),
            telefone: joi.string().max(20),
            cep: joi.string().max(10),
            logradouro: joi.string().max(60),
            numero: joi.string().max(10),
            cidade: joi.string().max(100),
            estado: joi.string().max(30),
            matricula: joi.string().max(50),
            id_proposta: joi.number(),
            fase_proposta: joi.string().max(50),
            pendencia: joi.string().max(50),
            situacao: joi.string().max(50),
            protocolo: joi.string().max(50),
            instituicao: joi.string().max(100),
            convenio: joi.string().max(100),
            servico: joi.string().max(100),
            valor_liberado: joi.string().max(50),
            valor_parcela: joi.string().max(50),
            quantidade_parcela: joi.number(),
            data_venda: joi.string().max(50),
            responsavel_cancelamento: joi.string().max(100),
            data_cancelamento: joi.string().max(50),
            motivo_cancelamento: joi.string().max(250),
        });
        const { error } = joi.validate(dataToValidate, schema);
        if (error) {
            throw createError(400, error, null);
        }
    },
});
