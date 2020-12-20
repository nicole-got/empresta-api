module.exports = ({ acessoService }) => ({
    execute: async () => {
        return await acessoService.all();
    },
});
