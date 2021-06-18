const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // parses incoming requests with JSON payloads

//create connection to database
const db = mysql.createPool({
    host: process.env.DB_HOST, //localhost
    user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //password
    database: process.env.DB, //ravenbooks
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

//Get Drugs

app.get("/drugs", (req, res) => {
    db.query("SELECT * FROM daroo order by daroo_name", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//Get Drug by id

app.get("/drug/:id", (req, res) => {
    db.query("SELECT * FROM daroo order by daroo_name WHERE id = ?",
        req.params.id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

//Post Drug

app.post("/drug", (req, res) => {
    const insertQuery = "INSERT INTO daroo SET ?";
    db.query(insertQuery, req.body, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Drug Added to Database");
        }
    });
});

//Update Drug

app.put("/drug", (req, res) => {
    const updateQuery =
        "UPDATE daroo SET daroo_name = ?, daroo_shekl = ?, daroo_khatar = ?, daroo_noskhe = ?, daroo_bime = ?, daroo_tolidkonande = ?, daroo_gheimat = ? WHERE id = ?";
    db.query(
        updateQuery,
        [req.body.daroo_name, req.body.daroo_shekl, req.body.daroo_khatar, req.body.daroo_noskhe, req.body.daroo_bime, req.body.daroo_tolidkonande, req.body.daroo_gheimat, req.body.id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

//Delete Drug

app.delete("/drug/:id", (req, res) => {
    db.query(
        "DELETE FROM daroo WHERE id = ?",
        req.params.id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

// Stuff

app.delete("/drug/:id", (req, res) => {
    db.query(
        "DELETE FROM sabt WHERE id = ?",
        req.params.id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
app.get("/staff-name", (req, res) => {
    db.query("SELECT * FROM sabt order by name_sabt", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post("/staff-name", (req, res) => {
    const insertQuery = "INSERT INTO sabt SET ?";
    db.query(insertQuery, req.body, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("staff Added to Database");
        }
    });
});
app.put("/staff-name", (req, res) => {
    const updateQuery =
        "UPDATE sabt SET name_sabt = ? WHERE id = ?";
    db.query(
        updateQuery,
        [ req.body.name_sabt, req.body.id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

// Factor
app.post("/factor", (req, res) => {
    const insertQuery = "INSERT INTO factor SET ?";
    db.query(insertQuery, req.body, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Factor Added to Database");
        }
    });
});
//Get Factor
app.get("/factor", (req, res) => {
    db.query("SELECT * FROM factor order by id", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//RizFactor
 app.post("/rizfactor", (req, res) => {
    const insertQuery = "INSERT INTO rizfactor SET ?";
    db.query(insertQuery, req.body, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Rizfactor Added to Database");
        }
    });
});
app.get("/rizfactor", (req, res) => {
    db.query("SELECT * FROM rizfactor order by factor_id", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put("/rizfactor", (req, res) => {
    const updateQuery =
        "UPDATE rizfactor SET daroo_noskhe = ?, daroo_bime = ?, daroo_gheimat = ?, daroo_tedad = ? WHERE id = ?";
    db.query(
        updateQuery,
        [req.body.daroo_noskhe, req.body.daroo_bime, req.body.daroo_gheimat, req.body.daroo_tedad, req.body.id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});