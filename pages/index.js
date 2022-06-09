import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Content from '../Components/Content'

const data = [
  {
    url: '/api/exportCSV',
    title: <text>Exportar CSV &nbsp;&nbsp;&nbsp;&rarr;</text>,
    description: <text>Faça o download de um arquivo .csv com todos os usuários</text>
  },
  {
    url: '/qrCode',
    title: <text>QR Code&apos;s &nbsp;&nbsp;&nbsp;&rarr;</text>,
    description: <text>Navegue até página com os QR Code&apos;s dos usuários</text>
  }
]

function RedirectBox({ url, title, description }, props)
{
  return(
      <a href={url} className={styles.button} id={styles.button} {...props}>
        <div>
          <span className={styles.title}>{title}</span>
          <p className={styles.description}>{description}</p>
        </div>
      </a>
  )
}

export default function Home() {
  
  return (
    <div id="dark" className={styles.container}>
      <Header />
      <Content>
        <section className={styles.options}>
          {
            data.map(( item, index ) => {
              console.log( item )
              return(
                <RedirectBox
                  url={item.url}
                  title={item.title}
                  description={item.description}
                  key={index}
                />
              )
            })
          }
        </section>
      </Content>
      <Footer />

    </div>
  )
}
