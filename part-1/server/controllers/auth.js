const users = []
const bcrypt = require("bcryptjs")

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passHash)
        if (users[i].username === username && existing) {
          const userCopy = {...users[i]}
          delete userCopy.passHash
          res.status(200).send(userCopy)
          console.log('successful')
          return
        }
      }
      console.log('User not found.')
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        let {username, email, firstName, lastName, password} = req.body
        console.log('Registering User')
        console.log(req.body)

        let salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(password, salt)

        const newUser = {
          username,
          email,
          firstName,
          lastName,
          passHash
        }

        users.push(newUser)
        let newUserCopy = {...users}
        delete newUserCopy.passHash
        console.log('user registered')
        res.status(200).send(newUserCopy)
    }
    


}