const API = ({ createAuthenticateOperation }) => ({
    login: async (req, res) => {
        const user = await createAuthenticateOperation.execute(req.body);
        res.send({
            status: 200,
            user: user,
        });
    },
});

module.exports = API;
