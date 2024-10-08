import styles from './usergreeting.module.css';

function UserGreeting(props){

    const welcomeMessage = <h2 className={styles.welcomeMessage}>welcome {props.username}</h2>
    const loginPrompt =  <h2 className={styles.loginPrompt}>Please log in to continue</h2>;
 return(props.isLoggedIn ? welcomeMessage : loginPrompt)
                          
}

export default UserGreeting