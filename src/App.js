import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Profil from './Components/Profil';
function App() {

const eleves =[
{
name:"ali",
lastname:"sel",
image:"https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg?w=740&t=st=1720625449~exp=1720626049~hmac=5f026ac9173bbbdfa0479da232c3273a872f541d6f0d74edd7b131aa5d1dd79e"

},

{
  name:"med",
  lastname:"sel",
  image:"https://img.freepik.com/photos-gratuite/rendu-3d-personnage-dessin-anime-lunettes-veste_1142-51310.jpg?w=740&t=st=1720625486~exp=1720626086~hmac=1fb4130b9ca7dc9f8bb1fd95ce4bb41249e31f668c04cacefb0c137b9bc706c1"
  
  },

  {
    name:"dali",
    lastname:"sel",
    image:"https://img.freepik.com/psd-premium/icone-3d-avocat-pour-personnes-avatar_431668-1441.jpg?w=740"
    
    }
]





  return (
    <div className="App">
      <Navbar/>
      {eleves.map ( (i)=> <Profil data={i}/> ) }
      <Footer/>
    </div>
  );

}
export default App;
