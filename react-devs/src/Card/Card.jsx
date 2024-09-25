import profilePic from './pexels-junior-teixeira-small.jpg'
import styles from './Card.module.css'

function Card(){

    return(
        <div className={styles.card}>
            <img className={styles.cardImage} src={profilePic} alt="Profile picture"></img>
            <h2 className={styles.cardTitle}>Bro Code</h2>
            <p className={styles.cardText}>I'm a Information Technologist </p>
        </div>
    )

}

export default Card