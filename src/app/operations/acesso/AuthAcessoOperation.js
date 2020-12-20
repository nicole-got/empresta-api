module.exports = ({ acessoService }) => ({
    execute: async (id) => {
        console.log("AcessoOperation id: ", id)
        return await acessoService.acessoAuth(id);
    },
});
