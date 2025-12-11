import './Voluntaria.scss';

const Voluntaria = () => {
  return (
    <div className="volunteer">
      
      {/* --- PARTE 1: TOPO --- */}
      <section className="volunteer__intro container">
        <div className="intro-header">
          <h1>Seja Voluntário</h1>
          <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        </div>

        <div className="benefits">
          <div className="benefit-card">
            <h3>Impacto Direto</h3>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
          </div>
          <div className="benefit-card">
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </div>
          <div className="benefit-card">
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </div>
        </div>
      </section>

      {/* --- PARTE 2: FORMULÁRIO --- */}
      <section className="volunteer__form-section">
        <div className="form-box">
          <h2>Inscrição para Voluntários</h2>
          
          <form>
            <h4 className="form-label">Dados Pessoais</h4>
            
            {/* Linha: Nome e Email */}
            <div className="input-row">
              <input type="text" placeholder="Seu Nome *" required />
              <input type="email" placeholder="Seu Email *" required />
            </div>
            
            {/* Linha: Telefone */}
            <input type="tel" placeholder="Seu Telefone *" className="full-width" required />

            <h4 className="form-label">Mensagem Adicional</h4>
            <textarea placeholder="Conte-nos porque você quer ser voluntário..."></textarea>

            <div className="form-footer">
              <p>Entraremos em contato para mais informações</p>
              <button type="submit" className="button-primary">Enviar Inscrição</button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Voluntaria;