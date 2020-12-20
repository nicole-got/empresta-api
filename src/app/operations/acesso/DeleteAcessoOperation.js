module.exports = ({ acessoService }) => ({
    execute: async (acesso) => {
        return await acessoService.delete(acesso);
    },
});
