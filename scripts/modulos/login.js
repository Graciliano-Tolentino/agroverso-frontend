// ==========================================================================================
// 🔐 modulos/login.js – Autenticação de acesso para sistema Agroverso
// 🎯 Simulação segura com escopo isolado, UX acessível e redirecionamento temático
// ==========================================================================================

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-login");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const perfilSelect = document.getElementById("perfil");
    const erroMsg = document.getElementById("erro-login");

    // Foco automático no campo de e-mail
    emailInput.focus();

    // 🛡️ Simulação de credenciais para fins locais (substituir por API futuramente)
    const credenciais = {
      "admin@agroverso.tec.br": { senha: "admin123", perfil: "administrador" },
      "gerente@agroverso.tec.br": { senha: "gerente123", perfil: "gerente" },
      "lider@agroverso.tec.br": { senha: "lider123", perfil: "lider" },
      "tecnico@agroverso.tec.br": { senha: "tecnico123", perfil: "tecnico" }
    };

    const mostrarErro = (mensagem) => {
      erroMsg.textContent = mensagem;
      erroMsg.hidden = false;
      erroMsg.focus?.();
    };

    const redirecionar = (perfil) => {
      const rota = {
        administrador: "dashboards/irrigacao/admin.html",
        gerente: "dashboards/irrigacao/gerente.html",
        lider: "dashboards/irrigacao/lider.html",
        tecnico: "dashboards/irrigacao/tecnico.html"
      };
      window.location.href = rota[perfil] || "index.html";
    };

    // Validação de submissão
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const senha = senhaInput.value.trim();
      const perfil = perfilSelect.value;

      const usuario = credenciais[email];

      if (usuario && usuario.senha === senha && usuario.perfil === perfil) {
        sessionStorage.setItem("usuario_email", email);
        sessionStorage.setItem("usuario_perfil", perfil);
        redirecionar(perfil);
      } else {
        mostrarErro("Credenciais inválidas. Verifique e tente novamente.");
      }
    });

    // Atalho F1 para suporte
    window.addEventListener("keydown", (e) => {
      if (e.key === "F1") {
        e.preventDefault();
        window.open("https://wa.me/5511963372373", "_blank");
      }
    });

    // Submissão por Enter fora de textarea
    form.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
        e.preventDefault();
        form.requestSubmit();
      }
    });
  });
})();
