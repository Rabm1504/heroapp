import PropTypes from 'prop-types';
import './Hero.css'; // Importar estilos CSS

const Hero = ({ superhero }) => {
  return (
    <div className="hero">
      <h3>{superhero.name}</h3>
      {/* Mostrar información adicional del superhéroe */}
    </div>
  );
};

Hero.propTypes = {
  superhero: PropTypes.object.isRequired,
};

export default Hero;
