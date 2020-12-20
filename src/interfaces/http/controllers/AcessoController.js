const API = ({
    getAcessoOperation,
    getAllAcessoOperation,
    createAcessoOperation,
    updateAcessoOperation,
    deleteAcessoOperation,
    acessoSchema,
}) => ({
    getAcesso: async (req, res) => {
        const acesso = await getAcessoOperation.execute(req.params.id);
        res.send({ status: 200, result: acesso });
    },
    getAll: async (req, res) => {
        const acesso = await getAllAcessoOperation.execute();
        res.send({ status: 200, result: acesso.data });
    },
    createAcesso: async (req, res) => {
        acessoSchema.validate(req.body);
        const result = await createAcessoOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateAcesso: async (req, res) => {
        acessoSchema.validate(req.body);
        const result = await updateAcessoOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteAcesso: async (req, res) => {
        const result = await deleteAcessoOperation.execute(req.body);
        res.send({ status: 200, result: result});
    },
});

module.exports = API;
