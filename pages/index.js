import styles from '../styles/Home.module.css';

export default function Home() {
    const meuLink = WhatsAppLink.gerar('+55 48 991897594', 'Oi! Quero saber mais sobre seus serviços.');

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img src="/StandardLogo.png" alt="Logo" className={styles.logo} />
        <p className={styles.title}>Bem vindo à melhor Hamburgueria de Cocal do Sul</p>
        <p className={styles.subtitle}>Faça seu pedido</p>
        <div className={styles.buttons}>
          <button onClick={() => window.open('#', '_blank')}>Peça pelo site</button>
          <button onClick={() => window.open(`${meuLink}`, '_blank')}>Peça pelo Whatsapp</button>
          <button onClick={() => window.open('#', '_blank')}>Ver cardápio</button>
        </div>
      </div>
    </div>
  );
}


const WhatsAppLink = {
  idioma: 'pt_BR',
  gerar(numero, mensagem) {
    const numeroLimpo = numero.replace(/\D/g, '');
    const texto = encodeURIComponent(mensagem);
    return `https://api.whatsapp.com/send?1=${this.idioma}&phone=${numeroLimpo}&text=${texto}`;
  }
};




