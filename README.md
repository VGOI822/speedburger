# speedburger

{opinioes.map(({ id, nome, nota, mensagem }) => (
              <div key={id} className={styles.opiniao}>
                <strong>{nome}</strong> - Nota: {nota}/5
                <p>{mensagem}</p>
              </div>
            ))}