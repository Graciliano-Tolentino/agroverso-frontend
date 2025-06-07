// ==========================================================================================
// 🔐 scripts/login.js – Autenticação Simulada Agroverso
// 🌱 Modular, acessível, regenerativo e alinhado à hierarquia de dashboards temáticos
// ==========================================================================================

(() => {
  // 🧠 Proteção de escopo global via IIFE

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-login");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const perfilSelect = document.getElementById("perfil");
    const erroMsg = document.getElementById("erro-login");

    // 🎯 Foco inicial no campo de e-mail
    emailInput.focus();

    // 🔐 Validação simples (pode ser substituída por API real futuramente)
    const autenticarUsuario = (email, senha, perfil) => {
      const credenciaisValidas = {
        "admin@agroverso.tec.br": { senha: "admin123", perfil: "administrador" },
        "gerente@agroverso.tec.br": { senha: "gerente123", perfil: "gerente" },
        "lider@agroverso.tec.br": { senha: "lider123", perfil: "lider" },
        "tecnico@agroverso.tec.br": { senha: "tecnico123", perfil: "tecnico" },
      };

      const usuario = credenciaisValidas[email];
      return usuario && usuario.senha === senha && usuario.perfil === perfil;
    };

    // 💬 Exibe erro acessível
    const mostrarErro = (mensagem) => {
      erroMsg.textContent = mensagem;
      erroMsg.hidden = false;
      erroMsg.focus?.();
    };

    // ✅ Redirecionamento por perfil após login simulado
    const redirecionarParaDashboard = (perfil) => {
      const caminhos = {
        administrador: "dashboards/irrigacao/admin.html",
        gerente: "dashboards/irrigacao/gerente.html",
        lider: "dashboards/irrigacao/lider.html",
        tecnico: "dashboards/irrigacao/tecnico.html",
      };

      window.location.href = caminhos[perfil] || "index.html";
    };

    // 📤 Submissão do formulário
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const senha = senhaInput.value.trim();
      const perfil = perfilSelect.value;

      if (autenticarUsuario(email, senha, perfil)) {
        localStorage.setItem("usuario_perfil", perfil);
        redirecionarParaDashboard(perfil);
      } else {
        mostrarErro("E-mail, senha ou perfil inválidos. Verifique os dados e tente novamente.");
      }
    });

    // 🆘 Suporte via WhatsApp (F1)
    window.addEventListener("keydown", (e) => {
      if (e.key === "F1") {
        e.preventDefault();
        window.open("https://wa.me/5511963372373", "_blank");
      }
    });

    // ⏎ Submissão por Enter
    form.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
        e.preventDefault();
        form.requestSubmit();
      }
    });
  });
})();
