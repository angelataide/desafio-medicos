import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <Link to="/" className="header__logo">
          <div className="logo-icon">
            ♥
          </div>
          <span>Médicos & Dentistas</span>
        </Link>

        <nav className="header__nav">
          <Link to="/" className="header__link">Home</Link>
          <Link to="/voluntario" className="button-primary">Seja Voluntário</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;