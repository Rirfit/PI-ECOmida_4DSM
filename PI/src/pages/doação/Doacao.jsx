import { useState } from 'react';
import './Doacao.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Doacao() {
  const [tipoDoacao, setTipoDoacao] = useState('');
  const [medida, setMedida] = useState('gramas');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  });

  const handleCepChange = async (e) => {
    const novoCep = e.target.value;
    setCep(novoCep);

    if (novoCep.length === 8) {
      const res = await fetch(`https://viacep.com.br/ws/${novoCep}/json/`);
      const data = await res.json();
      if (!data.erro) {
        setEndereco({
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf
        });
      }
    }
  };

  return (
    <>
    <Header/>

     <div className="Doacao">
    <form>
      <h2>Doação</h2>

      <label>Tipo de doação:</label>
      <select value={tipoDoacao} onChange={(e) => setTipoDoacao(e.target.value)}>
        <option value="">Selecione</option>
        <option value="dinheiro">Dinheiro</option>
        <option value="comida">Comida</option>
      </select>

      {tipoDoacao === 'dinheiro' && (
        <>
          <label>Valor (R$):</label>
          <input type="number" placeholder="Ex: 50.00" />
        </>
      )}

      {tipoDoacao === 'comida' && (
        <>
          <label>Alimento:</label>
          <input type="text" placeholder="Ex: Arroz" />
          <label>Quantidade:</label>
          <input type="number" placeholder="Ex: 500" />
          <select value={medida} onChange={(e) => setMedida(e.target.value)}>
            <option value="gramas">gramas</option>
            <option value="quilos">quilos</option>
          </select>
        </>
      )}

      <h3>Seus dados</h3>

      <label>Nome:</label>
      <input type="text" placeholder="Seu nome" />

      <label>CPF:</label>
      <input type="text" placeholder="000.000.000-00" />

      <label>CEP:</label>
      <input type="text" value={cep} onChange={handleCepChange} placeholder="Digite o CEP" maxLength="8" />

     <label>Endereço:</label>
<div className="endereco-grid">
  <input type="text" value={endereco.logradouro} placeholder="Rua"  />
  <input type="text" value={endereco.bairro} placeholder="Bairro"  />
  <input type="text" value={endereco.localidade} placeholder="Cidade"  />
  <input type="text" value={endereco.uf} placeholder="UF"  />
</div>

      <button type="submit">Enviar Doação</button>
    </form>
    </div>
    <Footer/>
    </>
  );
}

export default Doacao;
