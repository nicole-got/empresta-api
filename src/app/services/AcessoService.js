const Acesso = require("../../domain/entitities/Acesso");
module.exports = ({ acessoRepository, createError, bcrypt }) => ({
    create: async (acesso) => {
        const {
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id,
        } = acesso;

        const acessos = new Acesso(
            ace_usr_id,
            ace_permissao,
            ace_ven_id,
            ace_uni_id,
            ace_emp_id
        );
        return await acessoRepository.create(acessos);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await acessoRepository.get(id);
    },
    getAcessoByVendedorId: async (ids) => {
        if (!ids) throw createError(422, "ID Undefined", null);
        return await acessoRepository.getAcessoByVendedorId(ids);
    },
    all: async () => {
        const data = await acessoRepository.all();
        return { data: data };
    },
    delete: async (acesso) => {
        if (!acesso.ace_usr_id)
            throw createError(422, "User ID Undefined", null);
        if (!acesso.ace_permissao)
            throw createError(422, "User ID Undefined", null);
        return await acessoRepository.delete(acesso);
    },
    update: async (acesso) => {
        const { ace_usr_id } = acesso;
        if (!ace_usr_id) throw createError(422, "ID Undefined", null);
        return await acessoRepository.update(acesso);
    },
    acessoAuth: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await acessoRepository.acessoAuth(id);
    },
    verifyUserAcesso: async (acesso) => {
        const { id, permissao } = acesso;
        if (!id) throw createError(422, "ID Undefined", null);
        if (!permissao) throw createError(422, "Permissão Undefined", null);
        return await acessoRepository.verifyUserAcesso(acesso);
    },
    findByUser: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await acessoRepository.findByUser(id);
    },
});
