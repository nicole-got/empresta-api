const acessoMapper = require("./AcessoMapper");
module.exports = ({ db }) => ({
    create: async (acesso) => {
        return await db.ace_acesso.create(acessoMapper.toDatabaseSave(acesso));
    },
    get: async (id) => {
        const result = await db.ace_acesso.findOne({
            raw: true,
            where: { ace_usr_id: id },
        });
        return acessoMapper.toEntity(result);
    },
    getAcessoByVendedorId: async (ids) => {
        const result = await db.ace_acesso.findAll({
            raw: true,
            where: { ace_ven_id: ids },
        });
        const list = result.map((result) => acessoMapper.toEntity(result));
        return list;
    },
    getAcessoByUnidadeId: async (ids) => {
        const result = await db.ace_acesso.findAll({
            raw: true,
            where: { ace_uni_id: ids },
        });
        const list = result.map((result) => acessoMapper.toEntity(result));
        return list;
    },
    all: async (page) => {
        const result = await db.ace_acesso.findAll({ raw: true });
        const list = result.map((result) => acessoMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const count = await db.ace_acesso.count();
        return count;
    },
    delete: async (acesso) => {
        const { ace_usr_id, ace_permissao } = acesso;
        status = {
            ace_status: 0,
        };

        return await db.ace_acesso.update(acessoMapper.toDatabase(status), {
            where: {
                ace_usr_id: ace_usr_id,
                ace_permissao: ace_permissao,
            },
        });
    },
    update: async (acesso) => {
        const { ace_usr_id } = acesso;
        return await db.ace_acesso.update(acessoMapper.toDatabase(acesso), {
            where: { ace_usr_id: ace_usr_id },
        });
    },
    acessoAuth: async (id) => {
        const result = await db.ace_acesso.findAll({
            raw: true,
            where: { ace_usr_id: id, ace_status: 1 },
        });
        const list = result.map((result) =>
            acessoMapper.toEntityPermissao(result)
        );
        return list;
    },
    verifyUserAcesso: async (acesso) => {
        const { id, permissao } = acesso;
        const result = await db.ace_acesso.findOne({
            where: { ace_usr_id: id, ace_permissao: permissao, ace_status: 1 },
        });
        return result;
    },
    findByUser: async (id) => {
        const result = await db.ace_acesso.findAll({
            raw: true,
            where: { ace_usr_id: id, ace_status: 1 },
        });
        const list = result.map((result) => acessoMapper.toEntity(result));
        return list;
    },
});
