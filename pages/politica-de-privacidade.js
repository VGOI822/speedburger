import { useRouter } from 'next/router';
import politicaStyles from '../styles/PoliticaDePrivacidade.module.css'; 

export default function PoliticaDePrivacidade() {
  const router = useRouter();

  return (
    <div className={politicaStyles.background}>
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
        <h1 className={politicaStyles.title}>Avaliações</h1>
        <p>Nosso site oferece a opção de deixar uma avaliação sobre nossos produtos ou serviços. Este campo é opcional e pode ser preenchido de forma anônima, se o usuário preferir.</p>
        <p>As avaliações são exibidas publicamente no site com o objetivo de compartilhar a opinião dos clientes e melhorar nossos serviços. Recomendamos que <strong>nenhum dado pessoal sensível seja inserido na avaliação</strong>, mesmo que de forma espontânea.</p>
        <p>Todas as informações fornecidas são tratadas conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018). Se você desejar <strong>editar ou excluir</strong> uma avaliação enviada, entre em contato conosco.</p>
        <h1 className={politicaStyles.title}>Atualizações</h1>
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
