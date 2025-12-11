import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        
        {/* Coluna 1: Marca e Descrição */}
        <div className="footer__column brand">
          <div className="footer__logo">
            {/* Ícone de Escudo/Coração Verde */}
            <div className="logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white"/>
              </svg>
            </div>
            <span>Médicos & Dentistas</span>
          </div>
          <p>Saúde e cuidado sem barreiras para toda a comunidade.</p>
        </div>
        
        {/* Coluna 2: Contato com Ícones */}
        <div className="footer__column">
          <h4>Contato</h4>
          <ul className="contact-list">
            <li>
              {/* Ícone Email */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              contato@medico-dentista.org
            </li>
            <li>
              {/* Ícone Telefone */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (11) 3000-0000
            </li>
            <li>
              {/* Ícone Localização */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              São Paulo, Brasil
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className="footer__column">
          <h4>Redes Sociais</h4>
          <ul className="social-list">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;