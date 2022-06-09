import styles from '../../styles/Home.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
            <span>Desafio <a href={"https://unitok.com/"} className={styles.unitok} target={"_blank"} rel="noreferrer">Unitok</a>!</span>
        </header>
    )
}