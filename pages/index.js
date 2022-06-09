import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRef, useEffect } from 'react'


export default function Home() {
  
  return (
    <div id="dark" className={styles.container}>
      <header className={styles.header}>
        <span>Desafio <a href={"https://unitok.com/"} className={styles.unitok} target={"_blank"} rel="noreferrer">Unitok</a>!</span>
      </header>
      <section className={styles.content}>
        
        <section className={styles.options}>
          <a href={'/api/exportCSV'}>
            <div className={styles.button} id={styles.button}>
              <span className={styles.title}>Exportar CSV &nbsp;&nbsp;&nbsp;&rarr;</span>
              <p className={styles.description}>Faça o download de um arquivo .csv com todos os usuários</p>
            </div>
          </a>
          <a href={'/qrCode'}>
            <div className={styles.button} id={styles.button}>
              <span className={styles.title}>QR Code&apos;s &nbsp;&nbsp;&nbsp;&rarr;</span>
              <p className={styles.description}>
                Navegue até página com os QR Code&apos;s dos usuários
              </p>
            </div>
          </a>
        </section>
      {/* <Codes /> */}
      </section>
      

      <footer className={styles.footer}>Feito com ❤️ por William Rodrigues</footer>
    </div>
  )
}
