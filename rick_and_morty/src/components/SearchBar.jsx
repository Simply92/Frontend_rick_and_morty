import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const{onSearch} = props
   return (
      <div className={styles.SearchBar}>
         <input className= {styles.input}type='search' placeholder='Ingrese id' />
         <button className={styles.btn} onClick={onSearch}>Agregar</button>
      </div>
   );
}
