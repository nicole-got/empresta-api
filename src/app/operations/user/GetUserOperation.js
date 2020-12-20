module.exports = ({ userService }) => ({
    execute: async (id) => {
        return await userService.get(id);
    },
});
