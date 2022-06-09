import users from '../../../data/users/usersData'

const fs = require('fs')

export default (req, res) => {
  
  let text = "INDEX;NOME;FACEBOOK;LINKEDIN;INSTAGRAM;TWITTER;GITHUB"

  users.map(( item, index ) => {
    text += `\n${index};${item.name};${item.facebook};${item.linkedIn};${item.instagram};${item.twitter};${item.github}`
  })

  try {
    fs.writeFileSync('users.csv', text);
    
  } catch (err) {
    console.error(err);
  }
  res.setHeader('Content-Type', 'application/csv')
  res.setHeader('Content-Disposition', 'attachment; filename=users.csv');

  try{
    fs.unlinkSync('users.csv')
  }catch(err){
    console.log( err )
  }
  res.send( text )
}