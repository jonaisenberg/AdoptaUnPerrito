import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./componentes/Cards";
import Titulo from "./componentes/Header";
import Footer from "./componentes/Footer"

function App() {
    return (
        <>
            <Titulo />
            <div className="grupo">
                <Cards
                    url="https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg"
                    titulo="Bartolo"
                    texto="Lleno de energia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
                    textoButton="Husky"
                    colorButton="success"
                />
                <Cards
                    url="https://media.istockphoto.com/id/93392743/es/foto/bobtail.jpg?s=2048x2048&w=is&k=20&c=KuRG_7F5PRl-yfRvShmGAo6QBZ8nN6GVRsHvi8lErYU="
                    titulo="Messi"
                    texto="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
                    textoButton="Bobtail"
                    colorButton="primary"
                />
                <Cards
                    url="https://images.pexels.com/photos/12287391/pexels-photo-12287391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    titulo="Gohan"
                    texto="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
                    textoButton="Shar Pei"
                    colorButton="danger"
                />
                <Cards
                    url="https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    titulo="Princesa"
                    texto="Una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
                    textoButton="Beagle"
                    colorButton="warning"
                />
            </div>
            <Footer />
        </>
    );
}

export default App;
