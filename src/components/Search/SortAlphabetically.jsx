const SortAlphabetically = ({ superheroes, setSuperheroes }) => {
  const handleSort = () => {
    // Ordenar los superhéroes alfabéticamente
    const sortedSuperheroes = [...superheroes].sort((a, b) => a.name.localeCompare(b.name));
    setSuperheroes(sortedSuperheroes);
  };

  return (
    <div>
      <button onClick={handleSort}>Sort Alphabetically</button>
    </div>
  );
};

export default SortAlphabetically;

