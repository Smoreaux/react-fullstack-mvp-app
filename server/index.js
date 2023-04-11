//Index of Node. js is the file that runs initially once the Node. js code is executed. It is responsible for your application's startup, routing, and other functions.

/**This file is where your express server lives!! */

const express = require("express"); //require express library
const app = express();//runs express library
const cors = require("cors"); // require cors library
const pool = require("./db-con");//this is where you connect your sever to the database!

//anytime you want to create a middleware you have to use "app.use()" What Is Middleware? A request handler with access to the application's request-response cycle is known as middleware.
app.use(cors());
app.use(express.json()); // get data from the client side by using app.use to be able to access the request.body method from express library

app.listen(5001, () => { //make server start and test with a console.log
    console.log("server has started on port 5001!")
}); 

/*-----------------------EXPRESS ROUTES BELOW-------------------------------*/

/**POST*/
app.post("/userprofile", async (req, res) => {
    try {
        const { username } = req.body;
        const newUser = await pool.query(
            "INSERT INTO userprofile (username) VALUES($1) RETURNING *", //Using postman as a client I requested a post to the DB for the Username "Sydney" to be added w/ this route!
        [username]
        );

        res.json(newUser.rows[0]);
    } catch (err){
        console.error(err.message);
    }
});


/*GET ALL*/
app.get("/userprofile",async (req, res) => {
    try{
        const allInfo = await pool.query("SELECT * FROM userprofile");

        res.json(allInfo.rows);

    } catch (err) {
        console.error(err.message);
    }
});

/*GET ONE*/
app.get("/userprofile/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const userprofile = await pool.query("SELECT * FROM userprofile WHERE user_id = $1", [id])

       res.json(userprofile.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


/*PATCH(UPDATE)*/
app.put("/userprofile/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { username } = req.body;
        const updateUsername = await pool.query("UPDATE userprofile SET username = $1 WHERE user_id = $2",
        [username, id]
        );

        res.json("Username was updated!");
    } catch (err) {
        console.error(err.message)
    }
});



/*DELETE*/
app.delete("/userprofile/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM userprofile WHERE user_id = $1", [
            id
        ]);

        res.json("User was deleted!")
    } catch (err) {
        console.error(err.message)
    }
});