export const WhatsAppLink = {
  idioma: 'pt_BR',
  gerar(numero, mensagem) {
    const numeroLimpo = numero.replace(/\D/g, '');
    const texto = encodeURIComponent(mensagem);
    return `https://api.whatsapp.com/send?1=${this.idioma}&phone=${numeroLimpo}&text=${texto}`;
  },
};