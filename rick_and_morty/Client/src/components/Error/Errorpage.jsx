import React from "react";
import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";
import ErrorImage from "./5203299.jpg";

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.allpage}>
        <button className={styles.button} onClick={handleGoBack}>
                Volver
        </button>
      <img src={ErrorImage} alt="error-page" className={styles.imagen}/>    
    </div>

  )
};

export default ErrorPage;