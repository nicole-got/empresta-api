module.exports = ({ userService }) => ({
    execute: async (user) => {
        return await userService.update(user);
    },
});
