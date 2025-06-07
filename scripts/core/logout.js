// ==========================================================================================
// 🚪 core/logout.js – Encerramento de sessão do sistema Agroverso
// 🌿 Finalização regenerativa com empatia, clareza e segurança comportamental
// ==========================================================================================

(() => {
  /**
   * 🔚 logout – Finaliza a sessão com confirmação do usuário e redirecionamento
   */
  window.logout = () => {
    const confirmar = confirm("Tem certeza que deseja encerrar sua sessão?");
    if (!confirmar) return;

    // Limpa dados de sessão
    sessionStorage.clear();

    // Mensagem de saída
    alert("✅ Sessão encerrada com sucesso.\nNos vemos em breve!");

    // Redirecionamento após delay breve
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  };
})();
