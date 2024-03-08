import app from "./app.js"
const PORT = process.env.PORT || 3000

// connection.connect((error) => {
//     if(error){
//         return console.log(error)
//     } else {
//         console.log('Conexão realizada com sucesso!')
//         app.listen(PORT, () => {
//             console.log(`Example app listening on port ${PORT}`)
//         })
//     }
// })

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


