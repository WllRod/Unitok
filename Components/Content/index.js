import styles from '../../styles/Home.module.css'

export default function Content(props){
    return(
        <section className={styles.content}>
            {props.children}
        </section>
    )
}