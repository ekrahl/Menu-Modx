import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.DB_KEY,
    database: "menumodx"
})

app.use(express.json())
app.use(cors())

console.log('NODE_ENV: ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    // Return the main index.html, so react-router render the route in the client
    app.get('/', (req, res) => {
        res.sendFile(path.resolve('client/build', 'index.html'));
    });
}



// FEATURE ROUTES


// OYSTER ROUTES
app.get("/oysters", (req, res) => {
    const q = "SELECT * FROM menumodx.oysters ORDER BY name"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/oysters", (req, res) => {
    const q = "INSERT INTO oysters (`name`, `location`, `size`, `desc`, `price`) VALUES (?)"
    const values = [
        req.body.name, req.body.location, req.body.size, req.body.desc, req.body.price
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Oyster has been created")
    })
})

app.delete("/oysters/:id", (req, res) => {
    const oysterId = req.params.id;
    const q = "DELETE FROM oysters WHERE id = ?"

    db.query(q, [oysterId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Oyster has been deleted")
    })
})

app.put("/oysters/:id", (req, res) => {
    const oysterId = req.params.id;
    const q = "UPDATE oysters SET `name` = ?, `location` = ?, `size` = ?, `desc` = ?, `price` =? WHERE id =?"

    const values = [
        req.body.name, req.body.location, req.body.size, req.body.desc, req.body.price
    ]

    db.query(q, [...values, oysterId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Oyster has been updated")
    })
})

// BEER ROUTES
app.get("/draftbeer", (req, res) => {
    const q = "SELECT * FROM menumodx.draftbeer ORDER BY name"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/draftbeer", (req, res) => {
    const q = "INSERT INTO draftbeer (`name`,`type`,`brewery`,`location`,`abv`,`price`) VALUES (?)"
    const values = [
        req.body.name, req.body.type, req.body.brewery, req.body.location, req.body.abv, req.body.price
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Draft beer has been created")
    })
})

app.delete("/draftbeer/:id", (req, res) => {
    const draftId = req.params.id;
    const q = "DELETE FROM draftbeer WHERE id = ?"

    db.query(q, [draftId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Draft beer has been deleted")
    })
})

app.put("/draftbeer/:id", (req, res) => {
    const draftId = req.params.id;
    const q = "UPDATE draftbeer SET `name` = ?, `type` = ?, `brewery` = ?, `location` = ?, `abv` =?, `price` = ? WHERE id =?"

    const values = [
        req.body.name, req.body.type, req.body.brewery, req.body.location, req.body.abv, req.body.price
    ]

    db.query(q, [...values, draftId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Draft beer has been updated")
    })
})



// HAPPY HOUR ROUTES



app.listen(process.env.PORT, () => {
    console.log("Connected to database!")
})