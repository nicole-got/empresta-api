module.exports = ({ joi, createError }) => ({
    validate: (dataToValidate) => {
        const schema = joi.object().keys({
            ace_usr_id: joi.number(),
            ace_ven_id: joi.number(),
            ace_permissao: joi
                .string()
                .valid('administrador','associado','dependente','credenciado','recepcionista','empresa','franqueado','vendedor'),
            ace_status: joi.number(),
        });
        const { error } = joi.validate(dataToValidate, schema);
        if (error) {
            throw createError(400, error, null);
        }
    },
});
