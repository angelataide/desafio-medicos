import { Link } from 'react-router-dom';
import './Home.scss';
import heroImage from '../../assets/Frame.png';

const Home = () => {
  return (
    <div className="home">
      {/* --- SEÇÃO 1: --- */}
      <section className="hero container">
        <div className="hero__text">
          <div className="pill">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3H15M3 11V9C3 5.68629 5.68629 3 9 3H15C18.3137 3 21 5.68629 21 9V11C21 12.0609 20.5786 13.0783 19.8284 13.8284C19.0783 14.5786 18.0609 15 17 15H15M9 3V9M15 3V9M3 11C3 13.7614 5.23858 16 8 16H9M3 11V12C3 12.5523 3.44772 13 4 13C4.55228 13 5 12.5523 5 12V11M8 16H15M8 16V19C8 20.1046 8.89543 21 10 21H14C15.1046 21 16 20.1046 16 19V16M15 15H17M15 15V16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Saúde para todos</span>
          </div>
          <h1>Saúde e cuidado sem barreiras</h1>
          <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>
          <div className="hero__actions">
            <Link to="/voluntario" className="button-primary">Seja Voluntário</Link>
            <button className="button-outline">Como Ajudar</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="Médico sorrindo" />
        </div>
      </section>

      {/* --- SEÇÃO 2: MISSÃO --- */}
      <section className="mission">
        <div className="container">
          <div className="mission__header">
            <h2>Nossa Missão</h2>
            <p>Transformar vidas através do acesso universal a saúde de qualidade</p>
          </div>
          <div className="mission__cards">
            <div className="card">
              <h3>Acesso Equitativo</h3>
              <p>Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.</p>
            </div>
            <div className="card">
              <h3>Comunidade Forte</h3>
              <p>Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.</p>
            </div>
            <div className="card">
              <h3>Bem-estar Total</h3>
              <p>Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3 --- */}
      <section className="impact container">
        <div className="impact__header">
          <h2>Nosso Impacto</h2>
          <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>
        </div>

        <div className="impact__cards">
          <div className="stat-card">
            <h3>2,500+</h3>
            <p>Pessoas Atendidas</p>
          </div>
          <div className="stat-card">
            <h3>150+</h3>
            <p>Profissionais Voluntários</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Satisfação dos Pacientes</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Anos de Dedicação</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

