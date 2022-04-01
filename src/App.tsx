import './App.css';

import { Navbar } from "./components/navbar";
import { Rutas } from './routes';

const rutas : any = [
  { label: "Pregunta 1", path: "/" },
  { label: "Pregunta 2", path: "/dos" },
  { label: "Pregunta 3", path: "/tres" }
]

function App() {
  return (
    <div className="">
      <Navbar
        list={rutas}
        title={"UMBRA 3D.STUDIO"}
      >
        <Rutas />
      </Navbar>


    </div>
  );
}

export default App;
