import app from "./src/app.js"
import connection from "./src/app/database/connection.js"
const PORT = 3000

connection.connect((error) => {
    if(error){
        return console.log(error)
    } else {
        console.log('Conexão realizada com sucesso!')
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        })
    }
})


