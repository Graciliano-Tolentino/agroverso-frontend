// ==========================================================================================
// 🧪 dashboards/hidroponia.js – Simulação e atualização de parâmetros técnicos da hidroponia
// ⚗️ Dados regenerativos de solução nutritiva para técnicos, líderes e gerentes
// ==========================================================================================

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const tempEl = document.getElementById("temp-solucao");
    const nivelEl = document.getElementById("nivel-reservatorio");
    const phEl = document.getElementById("ph");
    const ecEl = document.getElementById("ec");

    if (!tempEl || !nivelEl || !phEl || !ecEl) return;

    const gerarLeituras = () => {
      const temperatura = (21 + Math.random() * 4).toFixed(1);   // 21°C a 25°C
      const nivel = Math.floor(70 + Math.random() * 30);         // 70% a 100%
      const ph = (5.8 + Math.random() * 0.6).toFixed(1);          // 5.8 a 6.4
      const ec = (1.5 + Math.random() * 0.5).toFixed(2);          // 1.5 a 2.0 mS/cm

      return {
        temperatura: `${temperatura}°C`,
        nivel: `${nivel}%`,
        ph: ph,
        ec: `${ec} mS/cm`
      };
    };

    const atualizarPainel = () => {
      const dados = gerarLeituras();
      tempEl.textContent = dados.temperatura;
      nivelEl.textContent = dados.nivel;
      phEl.textContent = dados.ph;
      ecEl.textContent = dados.ec;
    };

    atualizarPainel();
    setInterval(atualizarPainel, 15000);
  });
})();
