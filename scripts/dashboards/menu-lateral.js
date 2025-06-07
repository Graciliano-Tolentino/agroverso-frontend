// ==========================================================================================
// 📂 dashboards/menu-lateral.js – Exibição condicional do menu por perfil Agroverso
// 📌 Mostra apenas após login, destaca o item ativo e oculta para sessões inválidas
// ==========================================================================================

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menuPrivado");
    const perfil = sessionStorage.getItem("usuario_perfil");

    if (!perfil || !menu) return;

    // Exibe o menu se perfil válido estiver ativo
    menu.hidden = false;

    // 🧠 Destaca o link correspondente ao painel do perfil
    const rotas = {
      administrador: "dashboards/irrigacao/admin.html",
      gerente: "dashboards/irrigacao/gerente.html",
      lider: "dashboards/irrigacao/lider.html",
      tecnico: "dashboards/irrigacao/tecnico.html"
    };

    const linkAtivo = document.querySelector(`a[href="${rotas[perfil]}"]`);
    if (linkAtivo) {
      linkAtivo.classList.add("ativo");
      linkAtivo.style.textDecoration = "underline";
    }

    // 🔐 Oculta itens com atributo data-perfil se o usuário não tiver permissão
    document.querySelectorAll("[data-perfil]").forEach((item) => {
      const perfis = item.getAttribute("data-perfil").split(" ");
      if (!perfis.includes(perfil)) item.style.display = "none";
    });
  });
})();
