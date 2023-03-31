import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './AppAnimal.css';

function getRandomAnimal() {
  const animalsList = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animalsList[Math.floor(Math.random() * animalsList.length)]
}

function AppAnimalShow() {
  let [animals, setAnimals] = useState([]);


  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
    console.log(animals);
  };
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  });

  return (
    <div>
      <button onClick={handleClick}> Add Animal </button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default AppAnimalShow;
