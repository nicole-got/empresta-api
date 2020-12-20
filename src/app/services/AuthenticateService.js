const User = require("../../domain/entitities/User");

module.exports = ({ userRepository, createError, bcrypt, jwt }) => ({
    login: async (user) => {
        const { email, senha } = user;
        const retrieveUser = await userRepository.findByEmail(email);
        if (!retrieveUser) {
            throw createError(401, "User not found", null);
        }

        if (!(await bcrypt.compare(senha, retrieveUser.senha))) {
            throw createError(401, "Authentication Failed", null);
        }
        console.log("login",retrieveUser)
        const { id, nome } = retrieveUser;

        // const token = jwt.sign({ data: id }, "mysecret");
    
        // const token = jwt.sign({ data: id }, "mysecret", {
        //     expiresIn: "1h", // process.env.SECRET
        // });

        return { id, nome };
    },
});
