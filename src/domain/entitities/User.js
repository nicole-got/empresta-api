module.exports = class {
    constructor(
        id ,
        nome ,
        cpf ,
        data_nascimento,
        mae,
        email,
        senha,
        telefone,
        cep,
        logradouro,
        numero,
        cidade,
        estado,
        matricula,
        id_proposta,
        fase_proposta,
        pendencia,
        situacao,
        protocolo,
        instituicao,
        convenio,
        servico,
        valor_liberado,
        valor_parcela,
        quantidade_parcela,
        data_venda,
        responsavel_cancelamento,
        data_cancelamento,
        motivo_cancelamento
    ) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.mae = mae;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.matricula = matricula;
        this.id_proposta = id_proposta;
        this.fase_proposta = fase_proposta;
        this.pendencia = pendencia;
        this.situacao = situacao;
        this.protocolo = protocolo;
        this.instituicao = instituicao;
        this.convenio = convenio;
        this.servico = servico;
        this.valor_liberado = valor_liberado;
        this.valor_parcela = valor_parcela;
        this.quantidade_parcela = quantidade_parcela;
        this.data_venda = data_venda;
        this.responsavel_cancelamento = responsavel_cancelamento;
        this.data_cancelamento = data_cancelamento;
        this.motivo_cancelamento = motivo_cancelamento;
    }
};
