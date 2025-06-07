// ==========================================================================================
// 🧩 includes.js – Carregador automático de partials HTML • Agroverso
// 🌱 Permite usar <div data-include="partials/arquivo.html"> em qualquer página
// ==========================================================================================

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-include]").forEach(async (elemento) => {
      const url = elemento.getAttribute("data-include");
      try {
        const resposta = await fetch(url);
        const conteudo = await resposta.text();
        elemento.innerHTML = conteudo;
      } catch (erro) {
        console.warn(`[Agroverso] Falha ao carregar ${url}:`, erro);
        elemento.innerHTML = "<p style='color:red'>Erro ao carregar componente.</p>";
      }
    });
  });
})();
