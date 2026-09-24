import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello from the server --version2' })
})

app.listen(PORT, () => {
    console.log(`server is up and running on the PORT ${PORT}`)
})