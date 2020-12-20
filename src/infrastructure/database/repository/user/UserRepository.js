const userMapper = require("./UserMapper");
module.exports = ({ db }) => ({
    create: async (user) => {
        return await db.usuario.create(userMapper.toDatabaseSave(user));
    },
    get: async (id) => {
        const result = await db.usuario.findOne({
            raw: true,
            where: { id: id },
        });
        return userMapper.toEntity(result);
    },
    findByEmail: async (email) => {
        const user = await db.usuario.findOne({
            where: {
                email: email,
            },
        });
        return userMapper.toEntity(user);
    },
    update: async (user) => {
        const { id } = user;
        console.log(user)
        return await db.usuario.update(userMapper.toDatabase(user), {
            where: { id: id },
        });
    },
});
