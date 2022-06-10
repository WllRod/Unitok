import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../Components/Header';
import Content from '../../Components/Content'
import Footer from '../../Components/Footer';
import styles from '../../styles/Home.module.css'
import UserStyle from '../../styles/User.module.css'
import Icons from '../../Components/Icons/Icons';


const iconStyle = {
  color: 'whitesmoke',
  width: '50px',
  height: '35px'
}


function ProfilePicture( { url } )
{
  return(
    <div style={{ borderRadius: '50%', width: '150px', height: '150px', background: 'rgb(255, 76, 96)', padding: '2px'}}>
      <img src={url} style={{ width: '100%', height: '100%', borderRadius: '50%'}}/>
    </div>
  )
}

function SocialNetwork({ socialNetworkList })
{
  if( socialNetworkList )
  {
    
    return(
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px',  maxWidth: '200px', height: 'max-content',flexWrap: 'wrap'}}>
        {
          socialNetworkList.map(( item, index ) => {
            let icon = Icons( item.icon )
           
            return(
              !item.url ? null :
              <a href={item.url} key={index}>
                { icon ? React.cloneElement(icon, {
                  style: { ...iconStyle }
                }) : null }
              </a>
            )
          })
        }
      </div>
    )
  }
  
  
}

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    
    if( id )
    {
      fetch(`/api/users/${id}`, { method: 'GET'})
        .then( resp => resp.json() )
        .then( r => setUserData( r ))
    }

  }, [ id ])
  
  return(
    <div id="dark" className={styles.container}>
      <Header />
      <Content>
        
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className={UserStyle.background_container}>
              <section className={UserStyle.content}>
                <ProfilePicture url={userData.profilePic}/>
                <span className={UserStyle.name}>{userData.name}</span>
                <span className={UserStyle.bio}>{userData.bio}</span>
                <SocialNetwork socialNetworkList={userData.socialNetwork} />
              </section>
            </div>
          </div>
        
      </Content>
      <Footer />
    </div>
  )
}