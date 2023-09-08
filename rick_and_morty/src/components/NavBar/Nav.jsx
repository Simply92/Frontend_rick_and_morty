import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    function randomCharacter(event) {
        const randomNumber = Math.floor(Math.random() * 826) + 1;
        onSearch(randomNumber);
      }

      
return(
    <div className={styles.navBar}>
        <Link to= "/about"><button className={styles.active} >About</button></Link>
        <Link to= "/home"><button className={styles.active} >Home</button></Link>
        <Link to= "/favorites"><button className={styles.active}>Favorites</button></Link>
        <Link to= "/"><button className={styles.logOut}>Log out</button></Link>
        <button className={styles.random} onClick={randomCharacter}>Random</button>
        <SearchBar onSearch={onSearch} />
    </div>
)}

export default Nav;