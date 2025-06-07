// ==========================================================================================
// ⚡ dashboards/energia.js – Simulação de dados de geração solar e status dos inversores
// 🔌 Para uso nos dashboards do módulo Energia Solar Agroverso
// ==========================================================================================

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const geracaoEl = document.getElementById("geracao");
    const irradianciaEl = document.getElementById("irradiancia");
    const statusEl = document.getElementById("status-inversores");

    // Só executa se os elementos existirem na página
    if (!geracaoEl || !irradianciaEl || !statusEl) return;

    const gerarDadosEnergia = () => {
      const geracao = (3 + Math.random() * 2).toFixed(2); // 3.00 a 5.00 kW
      const irradiancia = Math.floor(700 + Math.random() * 150); // 700–850 W/m²

      const statusInversores = [
        `Inversor 1: ✅ Operando`,
        `Inversor 2: ${Math.random() > 0.7 ? '⚠️ Intermitente' : '✅ Operando'}`
      ];

      return {
        geracao: `${geracao} kW`,
        irradiancia: `${irradiancia} W/m²`,
        status: statusInversores
      };
    };

    const atualizarPainel = () => {
      const dados = gerarDadosEnergia();

      geracaoEl.textContent = dados.geracao;
      irradianciaEl.textContent = dados.irradiancia;

      statusEl.innerHTML = "";
      dados.status.forEach((linha) => {
        const li = document.createElement("li");
        li.textContent = linha;
        statusEl.appendChild(li);
      });
    };

    // Primeira carga + atualização periódica
    atualizarPainel();
    setInterval(atualizarPainel, 15000);
  });
})();
