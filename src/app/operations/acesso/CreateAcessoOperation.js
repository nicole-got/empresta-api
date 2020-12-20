module.exports = ({ acessoService }) => ({
    execute: async (acesso) => {
        return await acessoService.create(acesso);
    },
});
