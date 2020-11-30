import app from "./app";
import database from "./database"

const PORT = 3001


database.sync()
console.log("Database running at 3306")
// passar {force: true} dentro do sync para forçar a criação do banco de dados

app.listen(PORT)
console.log("Server running at " + PORT)
