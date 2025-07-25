import { useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { WhatsAppLink } from '../lib/whatsapp';



export default function Home() {
  const [popupVisivel, setPopupVisivel] = useState(false);
  const secaoAvaliacaoRef = useRef(null);


  const meuLink = WhatsAppLink.gerar(
    '+55 48 991897594',
    'Oi! Quero saber mais sobre seus serviços.'
  );

  function abrirPopup() {
    setPopupVisivel(true);
  }

  function fecharPopup() {
    setPopupVisivel(false);
  }

  function rolarParaAvaliacao() {
    secaoAvaliacaoRef.current?.scrollIntoView({ behavior: 'smooth' });
  }


  const opinioes = [
    {
      id: 1,
      nome: "João",
      nota: 5,
      mensagem: "O hambúrguer estava sensacional, muito saboroso!"
    },
    {
      id: 2,
      nome: "Anônimo",
      nota: 4,
      mensagem: "Entrega rápida e lanche gostoso."
    },
    {
      id: 3,
      nome: "Maria",
      nota: 3,
      mensagem: "Gostei, mas poderia vir mais quente."
    }
  ];


  return (
    <>
      <Head>
        <title>Speed Burger | Hamburgueria em Cocal do Sul</title>
        <meta name="description" content="Os melhores hambúrgueres artesanais de Cocal do Sul. Faça seu pedido online ou via WhatsApp!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Speed Burger | Hamburgueria em Cocal do Sul" />
        <meta property="og:description" content="Peça já seu hambúrguer artesanal feito com ingredientes frescos. Entrega rápida e sabor garantido!" />
        <meta property="og:image" content="/StandardLogo.png" />
        <meta property="og:url" content="https://speedburgercocal.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://speedburgercocal.com.br" />
      </Head>

      <div className={styles.background}>      
        <main className={styles.heroSection}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContainer}>
            <img src="/StandardLogo.png" alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>Bem vindo à melhor Hamburgueria de Cocal do Sul</h1>
            <p className={styles.subtitle}>Faça seu pedido</p>
            <div className={styles.buttons}>
              <button onClick={abrirPopup}>Peça pelo site</button>
              <button onClick={() => window.open(meuLink, '_blank')}>Peça pelo Whatsapp</button>
              <button onClick={abrirPopup}>Ver cardápio</button>
              <button className={styles.buttonAvaliacao} onClick={rolarParaAvaliacao}>Ver Avaliações</button>
            </div>
          </div>
        </main>



        {/* Conteúdo adicional que vem depois da imagem de fundo */}
        <section ref={secaoAvaliacaoRef} className={styles.extraSection}>
          <div className={styles.extraContent}>
            <h2>Avaliações</h2>

            {opinioes.map(({ id, nome, nota, mensagem }) => (
              <div key={id} className={styles.opiniao}>
                <div className={styles.opiniaoHeader}>
                  <strong>{nome}</strong>
                  <div className={styles.stars}>
                    {'★'.repeat(nota)}{'☆'.repeat(5 - nota)}
                  </div>
                </div>
                <p>{mensagem}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Popup */}
        {popupVisivel && (
          <div className={styles.popupOverlay} onClick={fecharPopup}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
              <h2>Site em Desenvolvimento</h2>
              <p>Estamos trabalhando para lançar o site completo em breve.</p>
              <p>Por enquanto, você pode fazer seu pedido somente pelo WhatsApp.</p>
              <button onClick={fecharPopup}>Fechar</button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Speed Burger. Todos os direitos reservados.</p>
          <p>CNPJ: 51.455.998/0001-50 • (48) 99189‑7594 • <a href="mailto:speedburgercocal@gmail.com" className={styles.link}>speedburgercocal@gmail.com</a></p>
          <p><a href="/politica-de-privacidade" className={styles.link}>Política de Privacidade</a></p>
        </footer>
      </div>
    </>
  );
}
