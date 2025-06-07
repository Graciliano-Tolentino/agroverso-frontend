// ==========================================================================================
// 🔐 core/auth.js – Proteção de páginas privadas por perfil • Agroverso
// ✅ Verifica sessão e redireciona não autorizados com ética e clareza regenerativa
// ==========================================================================================

(() => {
  /**
   * ✅ protegerPagina – Garante acesso apenas a perfis autorizados.
   * Chamar no início do <body> de páginas privadas:
   * <body onload="protegerPagina(['tecnico', 'gerente'])">
   *
   * @param {Array<string>} perfisPermitidos
   */
  window.protegerPagina = (perfisPermitidos = []) => {
    const perfil = sessionStorage.getItem("usuario_perfil");
    const email = sessionStorage.getItem("usuario_email");

    const autorizado = perfil && email && perfisPermitidos.includes(perfil);

    if (!autorizado) {
      console.warn(`[Agroverso] 🔒 Acesso negado para '${perfil}' ou sessão inexistente.`);
      alert("🚫 Acesso restrito. Faça login com um perfil autorizado.");
      window.location.href = "login.html";
    } else {
      console.info(`[Agroverso] ✅ Acesso liberado para '${perfil}' (${email}).`);
    }
  };
})();
