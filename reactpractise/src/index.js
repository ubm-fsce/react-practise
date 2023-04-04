// 1) Import the React and ReactDOM libraries
import ReactDOM from 'react-dom/client';
import AppAnimalShow from './animals/AppAnimal';
import AppPdas from "./pdas/AppPdas";
import AppPics from "./pics/AppPics";
import AppBooks from './books/AppBooks';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
// root.render(<AppPdas />);
// root.render(<AppAnimalShow />);

root.render(<AppBooks />);
//root.render(<AppPics />);
