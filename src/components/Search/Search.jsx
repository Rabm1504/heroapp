import { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import styles from './Search.model.css?inline';
import fetchHeroes from '../../api/index';

// El componente Search es un formulario de búsqueda que muestra un campo de texto, un menú desplegable y un botón
const Search = ({ setSuperheroes }) => {
  // Los estados searchTerm y gender se inicializan utilizando el hook useState de React
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState('');

  // La función handleClick se ejecuta cuando se hace clic en el botón "Submit"
  const handleClick = async () => {
    // Se establece el estado de los superhéroes utilizando el resultado de la función fetchHeroes
    setSuperheroes(await fetchHeroes(searchTerm, gender));
  }

  return (
    // El componente Search se representa como un contenedor div con la clase CSS searchContainer
    <div className={styles.searchContainer}>
      {/* El componente TextField muestra un campo de texto controlado por el estado searchTerm */}
      <TextField
        value={searchTerm}
        className={styles.textField}
        onChange={(event) => setSearchTerm(event.target.value)}
        label="Supehero"
        variant="filled"
      />
      {/* El componente FormControl y Select crean un menú desplegable controlado por el estado gender */}
      <div className={styles.selectContainer}>
        <FormControl variant="filled" className={styles.select}>
          <InputLabel>Gender</InputLabel>
          <Select value={gender} onChange={(event) => setGender(event.target.value)}>
            <MenuItem value='Male'>Male</MenuItem>
            <MenuItem value='Female'>Female</MenuItem>
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='-'>Genderless</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* El componente Button representa un botón con la clase CSS button y se vincula a la función handleClick */}
      <Button className={styles.button} variant="contained" color="primary" onClick={handleClick}>Submit</Button>
    </div>
  )
}

export default Search;


