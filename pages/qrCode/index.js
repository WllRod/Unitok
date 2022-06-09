import styles from '../../styles/Home.module.css'
import qrCodeStyles from '../../styles/QrCode.module.css'
import { useState, useEffect } from 'react'
import QRCode from "react-qr-code";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import Header from '../../Components/Header';
import Content from '../../Components/Content'
import Footer from '../../Components/Footer';

function Expand(props){
  const { title, url } = props
  let r           = (Math.random() + 1).toString(36).substring(7);
  const id        = props.id ?? r
  const [ expand, setExpand ] = useState( false )
  const [ baseUrl, setBaseUrl ] = useState( null )

  useEffect(() => {

    let containerDocument = document.getElementById(id)
  
    if( containerDocument )
    {
      containerDocument.style.setProperty('display', expand ? 'flex' : 'none')
    }
  }, [ expand ])

  useEffect(() => {
    if( window.location && !baseUrl)
    {
      setBaseUrl( window.location.origin )
    }
  }, [ baseUrl ])

  return(
    <div className={qrCodeStyles.expandContainer}>
      <section onClick={() => setExpand(!expand)} className={qrCodeStyles.title}>
        <span>{title}</span>
        { expand ? <AiOutlineArrowUp className={qrCodeStyles.arrow}/> : <AiOutlineArrowDown className={qrCodeStyles.arrow}/>}
      </section>
      <div className={qrCodeStyles.container} {...props} id={id}>
        <section style={{ height: 'max-content'}}>
          <QRCode value={`${baseUrl}${url}`} size={100} style={{display: expand ? 'initial' : 'none'}}/>
        </section>
      </div>
    </div>
  )
}

function Users()
{
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`/api/users`, { method: 'GET'})
        .then( resp => resp.json() )
        .then( r => setUserData( r ))

  }, [ ])

  return(
    userData.map(( item, index ) => {
      return <Expand title={item.name} key={item.id} url={`/users/${item.id}`}/>
    })
  )
  
}

export default function Codes() {

  return (
    <div id="dark" className={styles.container}>
      <Header />
      <Content>
        <section className={qrCodeStyles.content}>
          <Users />
        </section>
      </Content>
      <Footer />
    </div>
  )
}
