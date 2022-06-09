import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import qrCodeStyles from '../../styles/QrCode.module.css'
import { useState, useEffect } from 'react'
import QRCode from "react-qr-code";


function Collapse(props){
  const { title, url } = props
  let r = (Math.random() + 1).toString(36).substring(7);
  const id = props.id ?? r
  const [ expand, setExpand ] = useState( false )

  useEffect(() => {
    if( document.getElementById(id) )
    {
      document.getElementById(id).style.setProperty('display', expand ? 'initial' : 'none')
    }
  }, [ expand ])

  return(
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'red', height: 'max-content'}}>
      <span onClick={() => setExpand(!expand)}>{title}</span>
      <div className={qrCodeStyles.container} {...props} id={id}>
        <QRCode value={url} size={100}  />
      </div>
    </div>
  )
}

export default function Codes() {
  const [ opened, setOpened ] = useState({})
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`/api/users`, { method: 'GET'})
        .then( resp => resp.json() )
        .then( r => setUserData( r ))

  }, [ ])

  useEffect(() => {
    const teste = userData.reduce(( result, index ) => ({ ...result, [index.id]: false }), {})
    setOpened( teste )
  }, [ userData.length ])

  return (
    <div id="dark" className={styles.container}>
      <header className={styles.header}>
        <span>Desafio <a href={"https://unitok.com/"} className={styles.unitok} target={"_blank"} rel="noreferrer">Unitok</a>!</span>
      </header>
      <section className={styles.content}>
        {
          userData.map(( item, index ) => {
            return <Collapse title={item.name} key={item.id} url={`/users/${item.id}`}/>
          })
        }
     
      </section>
      <footer className={styles.footer}>Feito com ❤️ por William Rodrigues</footer>
    </div>
  )
}
