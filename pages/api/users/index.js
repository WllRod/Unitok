import users from '../../../data/users/usersData'

export default (req, res) => {
  res.json(users);
}