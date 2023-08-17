import styles from './card.module.css'

export default function Card(props) {
   const {name, status, species, gender, origin, image, onClose} = props;
   
   return (
      <div className={styles.divPrincipal}>
         <button className={styles.btn} onClick={onClose}>X</button>
         <h2 className={styles.status}>{status}</h2>
         <img className={styles.imagen} src={image} alt='' />
         <div className={styles.datos}>
         <h2 className={styles.name}>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         </div>
      </div>
   );
}
