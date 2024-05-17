document.addEventListener('DOMContentLoaded', function() {
  // Dados simulados
  const veiculos = [
    { placa: 'ABC1234', tag: 'TAG001', altura: 2.5, largura: 2, comprimento: 5, numeroDeEixos: 2 }
  ];

  const porticos = [
    { id: 1, localizacao: 'KM 50', status: 'Operacional' }
  ];

  const transacoes = [
    { id: 1, veiculoPlaca: 'ABC1234', porticoId: 1, dataHora: '2024-05-14T12:34:56', valor: 5.0 }
  ];

  const equipamentos = [
    { id: 1, tipo: 'Câmera', status: 'Operacional', porticoId: 1 }
  ];

  const usuarios = [
    { id: 1, nome: 'Admin', tipoUsuario: 'Administrador' }
  ];

  // Função para renderizar veículos
  const renderVeiculos = () => {
    const veiculoList = document.getElementById('veiculo-list');
    veiculoList.innerHTML = ''; // Limpa a lista antes de renderizar
    veiculos.forEach(veiculo => {
      const listItem = document.createElement('div');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `
        <div>
          <p><strong>Placa:</strong> ${veiculo.placa}</p>
          <p><strong>Tag:</strong> ${veiculo.tag}</p>
          <p><strong>Altura:</strong> ${veiculo.altura}m</p>
          <p><strong>Largura:</strong> ${veiculo.largura}m</p>
          <p><strong>Comprimento:</strong> ${veiculo.comprimento}m</p>
          <p><strong>Número de Eixos:</strong> ${veiculo.numeroDeEixos}</p>
        </div>
      `;
      veiculoList.appendChild(listItem);
    });
  };

  // Função para renderizar pórticos
  const renderPorticos = () => {
    const porticoList = document.getElementById('portico-list');
    porticoList.innerHTML = ''; // Limpa a lista antes de renderizar
    porticos.forEach(portico => {
      const listItem = document.createElement('div');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `
        <div>
          <p><strong>ID:</strong> ${portico.id}</p>
          <p><strong>Localização:</strong> ${portico.localizacao}</p>
          <p><strong>Status:</strong> ${portico.status}</p>
        </div>
      `;
      porticoList.appendChild(listItem);
    });
  };

  // Função para renderizar transações
  const renderTransacoes = () => {
    const transacaoList = document.getElementById('transacao-list');
    transacaoList.innerHTML = ''; // Limpa a lista antes de renderizar
    transacoes.forEach(transacao => {
      const listItem = document.createElement('div');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `
        <div>
          <p><strong>ID:</strong> ${transacao.id}</p>
          <p><strong>Veículo:</strong> ${transacao.veiculoPlaca}</p>
          <p><strong>Pórtico:</strong> ${transacao.porticoId}</p>
          <p><strong>Data/Hora:</strong> ${transacao.dataHora}</p>
          <p><strong>Valor:</strong> R$${transacao.valor}</p>
        </div>
      `;
      transacaoList.appendChild(listItem);
    });
  };

  // Função para renderizar equipamentos
  const renderEquipamentos = () => {
    const equipamentoList = document.getElementById('equipamento-list');
    equipamentoList.innerHTML = ''; // Limpa a lista antes de renderizar
    equipamentos.forEach(equipamento => {
      const listItem = document.createElement('div');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `
        <div>
          <p><strong>ID:</strong> ${equipamento.id}</p>
          <p><strong>Tipo:</strong> ${equipamento.tipo}</p>
          <p><strong>Status:</strong> ${equipamento.status}</p>
          <p><strong>Pórtico:</strong> ${equipamento.porticoId}</p>
        </div>
      `;
      equipamentoList.appendChild(listItem);
    });
  };

  // Função para renderizar usuários
  const renderUsuarios = () => {
    const usuarioList = document.getElementById('usuario-list');
    usuarioList.innerHTML = ''; // Limpa a lista antes de renderizar
    usuarios.forEach(usuario => {
      const listItem = document.createElement('div');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `
        <div>
          <p><strong>ID:</strong> ${usuario.id}</p>
          <p><strong>Nome:</strong> ${usuario.nome}</p>
          <p><strong>Tipo de Usuário:</strong> ${usuario.tipoUsuario}</p>
        </div>
      `;
      usuarioList.appendChild(listItem);
    });
  };

  // Adicionar ouvintes de eventos para renderizar o conteúdo ao clicar nas abas
  document.getElementById('nav-veiculos-tab').addEventListener('click', renderVeiculos);
  document.getElementById('nav-porticos-tab').addEventListener('click', renderPorticos);
  document.getElementById('nav-transacoes-tab').addEventListener('click', renderTransacoes);
  document.getElementById('nav-equipamentos-tab').addEventListener('click', renderEquipamentos);
  document.getElementById('nav-usuarios-tab').addEventListener('click', renderUsuarios);

  // Renderizar a aba ativa inicialmente
  renderVeiculos();
});
