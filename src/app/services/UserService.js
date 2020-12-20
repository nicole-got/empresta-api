const User = require("../../domain/entitities/User");
module.exports = ({ userRepository, createError,bcrypt }) => ({
    
    create: async (user) => {
        const {
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
        } = user;

        const users = new User(
            undefined,
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

        const passwordEncripty = await bcrypt.hash(senha, 10);
        users.senha = passwordEncripty;

        return await userRepository.create(users);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await userRepository.get(id);
    },
    update: async (usuario) => {
        const { id,senha } = usuario;
        if (!id) throw createError(422, "ID Undefined", null);

        if (senha) {
            const passwordEncripty = await bcrypt.hash(senha, 10);
            usuario.senha = passwordEncripty;
        }

        return await userRepository.update(usuario);
    }
});
