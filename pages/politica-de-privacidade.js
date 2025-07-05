import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'; // mantém o background
import politicaStyles from '../styles/PoliticaDePrivacidade.module.css'; // novo css para o conteúdo

export default function PoliticaDePrivacidade() {
  const router = useRouter();

  return (
    <div className={styles.background}>
      <button
        aria-label="Voltar"
        className={politicaStyles.backButton}
        onClick={() => router.back()}
      >
        &#8592;
      </button>

      <div className={politicaStyles.contentContainer}>
        <h1 className={politicaStyles.title}>Política de Privacidade</h1>
        <p>
          A Speed Burger valoriza sua privacidade. Este site não coleta, armazena ou compartilha dados pessoais
          diretamente. Todos os pedidos são realizados por meio da plataforma WhatsApp.
        </p>
        <p>
          Ao clicar em "Peça pelo WhatsApp", você será redirecionado para um ambiente externo onde a comunicação ocorre
          diretamente entre você e nossa equipe.
        </p>
        <p>
          Caso passemos a coletar informações diretamente por este site no futuro, atualizaremos esta política conforme a{' '}
          <strong>Lei Geral de Proteção de Dados (Lei 13.709/2018)</strong>.
        </p>
        <p>
          Para dúvidas, entre em contato pelo e-mail:{' '}
          <a href="mailto:speedburgercocal@gmail.com" className={politicaStyles.link}>
            speedburgercocal@gmail.com
          </a>
        </p>
        <p>
          <strong>Última atualização:</strong> Julho de 2025
        </p>
      </div>
    </div>
  );
}
