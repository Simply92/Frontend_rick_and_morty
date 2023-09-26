import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const Nav = ({onSearch}) => {
    function randomCharacter(event) {
        const randomNumber = Math.floor(Math.random() * 826) + 1;
        onSearch(randomNumber);
      }
    const {pathname} = useLocation()
    
return(
    <div className={styles.navBar}>
        
        <NavLink to= "/about">
            <button className={`${styles.normalButton} ${pathname === "/about"? styles.activeButton : ''}`} >About</button>
            </NavLink>
        <NavLink to= "/home" >
            <button className={`${styles.normalButton} ${pathname === "/home"? styles.activeButton : ''}`} >Home</button>
            </NavLink>
        <NavLink to= "/favorites" >
            <button className={`${styles.normalButton} ${pathname === "/favorites"? styles.activeButton : ''}`}>Favorites</button>
            </NavLink>
        
        <Link to= "/"><button className={styles.logOut}>Log out</button></Link>
        <button className={styles.random} onClick={randomCharacter}>Random</button>
        <SearchBar onSearch={onSearch} />
    </div>
)}

export default Nav;