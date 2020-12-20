module.exports = ({ acessoService }) => ({
    execute: async (id) => {
        return await acessoService.get(id);
    },
});
