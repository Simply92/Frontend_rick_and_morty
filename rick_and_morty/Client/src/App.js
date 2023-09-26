// COMPONENTES
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/NavBar/Nav';
import ErrorPage from "./components/Error/Errorpage.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx"
//HOOKS
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
//ESTILOS
import './App.css';
import Swal from 'sweetalert2';

function App() {
   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);

   const {pathname} = useLocation();
   const navigate = useNavigate();

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            const idExistente = characters.some(char => char.id === data.id);
            if(idExistente){
               Swal.fire('The id is repeated!','','warning')
            } else{
           setCharacters((oldChars) => [...oldChars, data])}; 
         } else {
             Swal.fire('This id was not found!', '', 'error')
         }
      }).catch();
   }
  
   function onClose(id) {
     const newCharacters = characters.filter((char) => char.id !== Number(id));
     
     setCharacters(newCharacters);
     console.log(onClose);
  }
  
//   function login(userData) {
//    if (userData.password === PASSWORD && userData.email === EMAIL) {
//       setAccess(true);
//       navigate('/home');
//    }

   return (
      <div className='App'>
         {pathname !== '/' &&<Nav onSearch= {onSearch}/>}
         <Routes>
         <Route path='/' element={<Form login={login} />} />
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/favorites' element={<Favorites />}/>
         <Route path='*' element={<ErrorPage />} />
         </Routes>
      </div>
   );
}

export default App;
