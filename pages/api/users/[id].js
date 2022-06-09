import users from '../../../data/users/usersData'

export default (req, res) => {
  const { query: { id } } = req;
  console.log( id )

  res.json({ 
    ...users.find(user => user.id === parseInt(id)),
  });
}