const API = ({
    getUserOperation,
    createUserOperation,
    updateUserOperation,
    userSchema,
}) => ({
    getUser: async (req, res) => {
        const user = await getUserOperation.execute(req.params.id);
        res.send({ status: 200, result: user });
    },
    updateUser: async (req, res) => {
        const user = await updateUserOperation.execute(req.body);
        res.send({ status: 200, result: user });
    },
    createUser: async (req, res) => {
        userSchema.validate(req.body);
        const user = await createUserOperation.execute(req.body);
        res.send({ status: 200, result: user });
    },
});

module.exports = API;
