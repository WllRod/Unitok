import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
    <div>
      Nome: {userData.name}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px'}}>
        
      </div>
    </div>
  )
}