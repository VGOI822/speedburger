import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [popupVisivel, setPopupVisivel] = useState(false);
  const meuLink = WhatsAppLink.gerar('+55 48 991897594', 'Oi! Quero saber mais sobre seus serviços.');

  function abrirPopup() {
    setPopupVisivel(true);
  }

  function fecharPopup() {
    setPopupVisivel(false);
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img src="/StandardLogo.png" alt="Logo" className={styles.logo} />
        <p className={styles.title}>Bem vindo à melhor Hamburgueria de Cocal do Sul</p>
        <p className={styles.subtitle}>Faça seu pedido</p>
        <div className={styles.buttons}>
          
          <button onClick={abrirPopup}>Peça pelo site</button>
          <button onClick={() => window.open(`${meuLink}`, '_blank')}>Peça pelo Whatsapp</button>
          <button onClick={abrirPopup}>Ver cardápio</button>
        </div>
      </div>

      {/* Popup */}
      {popupVisivel && (
        <div className={styles.popupOverlay} onClick={fecharPopup}>
          <div className={styles.popup} onClick={e => e.stopPropagation()}>
            <h2>Site em Desenvolvimento</h2>
            <p>Estamos trabalhando para lançar o site completo em breve.</p>
            <p>Por enquanto, você pode fazer seu pedido somente pelo WhatsApp.</p>
            <button onClick={fecharPopup}>Fechar</button>
          </div>
        </div>
      )}
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
