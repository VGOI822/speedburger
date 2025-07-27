import styles from '../styles/Home.module.css';

export default function ListaAvaliacoes({ opinioes }) {
  return (
    <div className={styles.extraContent}>
      <h2>Avaliações</h2>
      {opinioes.map(({ id, nome, avaliado, mensagem }) => (
        <div key={id} className={styles.opiniao}>
          <div className={styles.opiniaoHeader}>
            <strong>{nome}</strong>
            <div className={styles.stars}>
              {'★'.repeat(avaliado)}{'☆'.repeat(5 - avaliado)}
            </div>
          </div>
          <p>{mensagem}</p>
        </div>
      ))}
    </div>
  );
}
