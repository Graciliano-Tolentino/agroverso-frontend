// ==========================================================================================
// 💧 dashboards/irrigacao.js – Simulação e atualização do painel de Irrigação Agroverso
// 🌱 Dados regenerativos: umidade, temperatura, válvulas e tempo real para técnicos e líderes
// ==========================================================================================

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const tempSoloEl = document.getElementById("temp-solo");
    const umidadeEl = document.getElementById("umidade");
    const ultimaIrrigacaoEl = document.getElementById("ultima-irrigacao");
    const statusValvulasEl = document.getElementById("status-valvulas");

    if (!tempSoloEl || !umidadeEl || !ultimaIrrigacaoEl || !statusValvulasEl) return;

    const gerarDados = () => {
      const temperatura = (24 + Math.random() * 6).toFixed(1); // 24°C a 30°C
      const umidade = Math.floor(35 + Math.random() * 20);     // 35% a 55%

      return {
        temperatura: `${temperatura}°C`,
        umidade: `${umidade}%`,
        ultimaIrrigacao: "Hoje às " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        valvulas: [
          `Setor 1: ${umidade < 40 ? "✅ Ativa" : "⏳ Aguardando"}`,
          `Setor 2: ⏳ Programada`,
          `Setor 3: ❌ Inativa`
        ]
      };
    };

    const atualizarPainel = () => {
      const dados = gerarDados();
      tempSoloEl.textContent = dados.temperatura;
      umidadeEl.textContent = dados.umidade;
      ultimaIrrigacaoEl.textContent = dados.ultimaIrrigacao;

      statusValvulasEl.innerHTML = "";
      dados.valvulas.forEach((v) => {
        const li = document.createElement("li");
        li.textContent = v;
        statusValvulasEl.appendChild(li);
      });
    };

    atualizarPainel();
    setInterval(atualizarPainel, 15000);
  });
})();
