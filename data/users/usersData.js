import React from 'react'
import { BsFacebook } from 'react-icons/bs'

const users = [
	
  {
    id: 1,
    name: 'Mike Wazowski',
    profilePic: "https://i.pinimg.com/280x280_RS/00/e5/42/00e5427a361f7897e669711ba8667d04.jpg",
    bio: "There's more to life than scaring.",
    socialNetwork: [
      {
        url: 'https://pt-br.facebook.com/MonstersIncMikeWazowski/',
        icon: 'facebook'
      },
      {
        url: 'https://www.instagram.com/mike_wazowskki/',
        icon: 'instagram'
      },
      {
        url: null,
        icon: 'twitter'
      },
      {
        url: 'https://br.linkedin.com/in/mike-wazowski-15100991',
        icon: 'linkedIn'
      },
      {
        url: 'https://github.com/Mike-Wazowski',
        icon: 'github'
      }
    ]
  }
  
];

export default users