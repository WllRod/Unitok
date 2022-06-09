import users from '../../../data/users/usersData'

const fs = require('fs')

export default (req, res) => {
  
  let text = "index;nome;bio;profilePic;"

  users.map(( item, index ) => {
    item.socialNetwork.map(( item2, index2 ) => {
      text += `${item2.icon};`
    })
  })

  text += "\n"

  users.map(( item, index ) => {
    text += `${index};${item.name};${item.bio};${item.profilePic};`
    item.socialNetwork.map(( item2, index2 ) => {
      let url = item2.url ? item2.url : ""
      text += `${url};`
    })

    text += "\n"
  })
  // users.map(( item, index ) => {
  //   text += `\n${index};${item.name};`
  //   item.socialNetwork.map(( item2, index2 ) => {
  //     let url = item2.
  //     text += `${url};`
  //   })
  // })

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