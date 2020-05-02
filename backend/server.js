const app = require('./app')
const mongoose = require('mongoose')
const chalk = require('chalk')

const connectionString = `mongodb+srv://linkedin:Xs5YlSd2tMwmNJd7@cluster0-ryysl.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
  useNewUrlParser: true
})
  .then(con => {
    console.log(chalk.green('DB Connection succuessfull!'))
  })
  .catch(err => {
    console.log(chalk.red('Bad thinks happened'))
  })


app.listen(3000, () => {
  console.log(chalk.green(`Server is running on port 3000!`))
})