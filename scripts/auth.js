// ==========================================================================================
// 🔐 scripts/auth.js – Proteção de Acesso Agroverso
// 🌿 Segurança modular, visual e comportamental, com clareza ética e UX compassiva
// ==========================================================================================

(() => {
  // 🔒 Escopo isolado via IIFE – proteção contra interferências externas

  /**
   * ✅ protegerPagina – Verifica se o perfil atual pode acessar a página.
   * Requer chamada explícita na parte superior de cada HTML privado:
   * <script>protegerPagina(['tecnico', 'gerente'])</script>
   * 
   * @param {Array<string>} perfisPermitidos – Lista de perfis autorizados.
   */
  window.protegerPagina = (perfisPermitidos = []) => {
    const perfil = sessionStorage.getItem("usuario_perfil");
    const email = sessionStorage.getItem("usuario_email");

    const autorizado = perfil && email && perfisPermitidos.includes(perfil);

    if (!autorizado) {
      console.warn(`[Agroverso] 🔒 Acesso negado para perfil '${perfil}' ou sessão ausente.`);
      alert("⚠️ Acesso restrito.\nFaça login com um perfil autorizado para continuar.");
      window.location.href = "login.html";
    } else {
      console.info(`[Agroverso] ✅ Acesso concedido para '${perfil}' (${email}).`);
    }
  };

  /**
   * 🔚 logout – Encerra a sessão com empatia e elegância
   */
  window.logout = () => {
    const confirmar = confirm("Deseja realmente encerrar sua sessão atual?");
    if (!confirmar) return;

    sessionStorage.clear();

    alert("✅ Sessão encerrada com sucesso.\nAté breve!");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 800);
  };

})();
