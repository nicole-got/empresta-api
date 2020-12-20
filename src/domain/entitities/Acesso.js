module.exports = class {
    constructor(
        ace_usr_id, 
        ace_permissao,
        ace_ven_id,
        ace_uni_id,
        ace_emp_id,
        ace_status,
        ace_data_alteracao,
        ace_created_at,
    ) {
        this.ace_usr_id = ace_usr_id;
        this.ace_permissao = ace_permissao;
        this.ace_ven_id = ace_ven_id;
        this.ace_uni_id = ace_uni_id;
        this.ace_emp_id = ace_emp_id;
        this.ace_status = ace_status;
        this.ace_data_alteracao = ace_data_alteracao;
        this.ace_created_at = ace_created_at;
    }
};
