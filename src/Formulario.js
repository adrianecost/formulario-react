import React, { useState } from "react";
import axios from "axios";

function Formulario() {
  const [nome, SetNome] = useState("");
  const [email, SetEmail] = useState("");
  const [senha, SetSenha] = useState("");
  const [profissao, SetProfissao] = useState("");
  const [aceitaTermos, SetAceitaTermos] = useState(false);

  const handleCadastroFormulario = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/usuarios", {
        nome,
        email,
        senha,
        profissao,
        termos: aceitaTermos,
      });
      console.log("Resposta da Api", response.data);
    } catch (error) {
      console.error("ERRO AO FAZER SOLICITAÇÃO", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCadastroFormulario}>
        <div>
          <h1>FORMULÁRIO DE CADASTRO</h1>
        </div>
        <div>
          <h4>Nome</h4>
          <input
            required
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => SetNome(e.target.value)}
          />
          <h4>Email</h4>
          <input
            required
            type="text"
            placeholder="Insira seu Email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <h4>Senha</h4>
          <input
            required
            type="password"
            placeholder="Insira sua senha"
            value={senha}
            onChange={(e) => SetSenha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="profissao">
            Profissao:
            <select
              required
              id="profissao"
              name="profissao"
              value={profissao}
              onChange={(e) => SetProfissao(e.target.value)}
            >
              <option value="">Selecione a profissao</option>
              <option value="estudante">Estudante</option>
              <option value="professor">Professor</option>
              <option value="outros">Outros</option>
            </select>
          </label>
        </div>
        <div>
          <h1></h1>
          <input
            required
            type="checkbox"
            id="aceitaTermos"
            checked={aceitaTermos}
            onChange={() => SetAceitaTermos(!aceitaTermos)}
          />
          <label htmlFor="aceitaTermos">
            Eu aceito os termos e condições de serviço
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
