import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/avaliacao.module.css';

export default function Contato() {
    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        mensagem: '',
        avaliado: 0,
    });
    const [enviado, setEnviado] = useState(false);
    const [anonimizar, setAnonimizar] = useState(false);

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleAvaliado = (nota) => {
        setForm({ ...form, avaliado: nota });
    };

    const handleAnonimizarChange = (e) => {
        setAnonimizar(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dadosParaEnviar = {
            ...form,
            nome: anonimizar ? 'Cliente' : form.nome,
            sobrenome: anonimizar ? 'Anônimo' : form.sobrenome,
        };

        try {
            const response = await fetch('http://localhost:3000/api/avaliacoes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosParaEnviar),
            });

            if (response.ok) {
                console.log('Avaliação enviada com sucesso!');
                setEnviado(true);
                setForm({ nome: '', sobrenome: '', mensagem: '', avaliado: 0 });
                setAnonimizar(false);
            } else {
                const erro = await response.json();
                console.error('Erro ao enviar:', erro);
                alert('Erro ao enviar a avaliação.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro na requisição.');
        }
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    onClick={() => handleAvaliado(i)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAvaliado(i);
                    }}
                    role="button"
                    tabIndex={0}
                    className={`${styles.star} ${i <= form.avaliado ? styles.selected : ''}`}
                    aria-label={`${i} estrela${i > 1 ? 's' : ''}`}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className={styles.container}>
            {!enviado ? (
                <form onSubmit={handleSubmit} className={styles.formWrapper}>
                    <h1 className={styles.title}>Deixe sua avaliação</h1>

                    <div style={{ marginBottom: '1rem' }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={anonimizar}
                                onChange={handleAnonimizarChange}
                                style={{ marginRight: '0.5rem' }}
                            />
                            Quero enviar minha avaliação anonimamente
                        </label>
                    </div>

                    <div className={styles.flexRow}>
                        <div className={styles.flexChild}>
                            <label>Nome:</label>
                            <br />
                            <input
                                type="text"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                required={!anonimizar}
                                disabled={anonimizar}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.flexChild}>
                            <label>Sobrenome:</label>
                            <br />
                            <input
                                type="text"
                                name="sobrenome"
                                value={form.sobrenome}
                                onChange={handleChange}
                                required={!anonimizar}
                                disabled={anonimizar}
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Sua avaliação:</label>
                        <br />
                        <div className={styles.starsWrapper}>{renderStars()}</div>
                        {form.avaliado === 0 && (
                            <small className={styles.errorMsg}>Por favor, selecione uma avaliação.</small>
                        )}
                    </div>

                    <div>
                        <label>Deixe sua opinião:</label>
                        <br />
                        <textarea
                            name="mensagem"
                            value={form.mensagem}
                            onChange={handleChange}
                            required
                            rows={5}
                            className={styles.textarea}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={form.avaliado === 0}
                        className={styles.submitButton}
                    >
                        Enviar avaliação
                    </button>
                </form>
            ) : (
                <div className={styles.successMessage}>
                    <p>Mensagem enviada com sucesso!</p>
                    <button
                        onClick={() => router.push('/')}
                        className={styles.submitButton}
                        style={{ marginTop: '1rem' }}
                    >
                        Voltar à página inicial
                    </button>
                </div>
            )}
        </div>
    );
}
