import styles from "./Form.module.css";
import loginImagen from "./imagen_login.jpg";
import { useState } from "react";
import validation from "./validation";

const Form = (props) => {
    const {login} = props;
    const [errors, setErrors] = useState({})
    const [userData, setuserData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        setuserData({...userData, [event.target.name] : event.target.value })
        setErrors(validation({...userData, [event.target.name] : event.target.value}))
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }
    
    return(
        <div className={styles.contenedor}>
           <form onSubmit={handleSubmit} className={styles.form}  action="">
           <img className={styles.image} src={loginImagen} alt="Imagen Login" />
            <label htmlFor="email">E-mail</label>
            <input 
            value={userData.email} 
            type="email"
            onChange={handleChange}
            name="email"
             />
             {errors.email && (
             <h4 style={{color: "red"}}>
                <span>{errors.email}</span>
             </h4>
             )}
            <label htmlFor="password">Password</label>
            <input 
            value={userData.password} 
            type="password"
            onChange={handleChange}
            name="password" 
            />
             {errors.password && (
             <h4 style={{color: "red"}}>
                <span>{errors.password}</span>
             </h4>
             )}
            <button>Submit</button>
           </form>
        </div>
)
}

export default Form;