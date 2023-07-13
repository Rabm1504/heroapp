
import { Grid, CircularProgress } from '@material-ui/core';
import styles from '../Heroes/Heroes.module.css';
import Superhero from '../Heroes/Hero/Hero.module.css';

/**
 * El componente Superheroes muestra una lista de superhéroes.
 * @param {object} props - Propiedades pasadas al componente.
 * @param {array} props.superheroes - Arreglo de superhéroes.
 * @param {string} props.searchTerm - Término de búsqueda.
 * @returns {JSX.Element} - Elemento JSX que representa la lista de superhéroes.
 */
const Superheroes = (props) => {
  // Si no hay superhéroes y hay un término de búsqueda, muestra un mensaje de error
  if (!props.superheroes.length && props.searchTerm) {
    return (
      <div className={styles.textContainer}>
        <h1 className={styles.error}>No heroes found!</h1>
      </div>
    );
  }

  // Si no hay superhéroes, muestra un indicador de progreso circular
  if (!props.superheroes.length) {
    return (
      <div className={styles.textContainer}>
        <CircularProgress size={90} thickness={5} className={styles.progress} />
      </div>
    );
  }

  // Renderiza una cuadrícula de superhéroes
  return (
    <Grid container spacing={3} className={styles.container}>
      {props.superheroes.map((superhero, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={2}>
          <Superhero superhero={superhero} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Superheroes;
