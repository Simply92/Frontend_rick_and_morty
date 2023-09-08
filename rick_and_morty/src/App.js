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

function App() {
   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);

   const {pathname} = useLocation();
   const navigate = useNavigate();
   
   
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'Password12';
   

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const idExistente = characters.some(char => char.id === data.id);
            if(idExistente){
               window.alert('El id ya existe en la lista')
            } else{
           setCharacters((oldChars) => [...oldChars, data])}; 
         } else {
             window.alert('No hay personaje con esa id!')
         }
      }).catch(error => window.alert('No hay personaje con esa id!'));
   }
  
   function onClose(id) {
     const newCharacters = characters.filter((char) => char.id !== Number(id));
     
     setCharacters(newCharacters);
  }
  
  function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
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
