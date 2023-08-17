import Card from './Card';
import styles from './cards.module.css'


export default function Cards(props) {
   const {characters} = props;
   return <div className={styles.mainDiv}>
      {characters.map((item) => {
         return(
            <Card
            key= {item.id}
            name= {item.name}
            status= {item.status}
            species= {item.species}
            gender= {item.gender}
            origin= {item.origin.name}
            image= {item.image}
            onClose= {() => window.alert('Emulamos que se cierra la card')}
            />
         )
      })}
   </div>;
}
