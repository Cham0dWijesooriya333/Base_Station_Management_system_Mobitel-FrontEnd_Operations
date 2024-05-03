const express = require("express") ;
const mysql = require("mysql") ;
const cors = require("cors") ;
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(express.json());  
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "",
  database: "signup"
});
app.get('/', (req, res) => {
    const sql = "SELECT * FROM sample "; 
    db.query(sql, (err, data) => {
      if(err) return res.json("Error inside Database");
      return res.json(data);
    })
})

app.post('/student', (req, res) => {
    const sql = "INSERT INTO sample (id,Name,Email,Region) VALUES (?)" ;
    const values = [
         req.body.id,
         req.body.name,
         req.body.email,
         req.body.region,
           ]

    db.query(sql, [values], (err, data)=>{
      return res.json(data)
      
      
    })
    

})  


app.put('/update/:id/:email', (req, res) => {
    const id = req.params.id;
    const email = req.params.email; 
    const region = req.body.region;
    const sql = "UPDATE sample SET `Reason`=? WHERE id=? AND Email=?";
    
    db.query(sql, [region, id,email], (err, data) => {
      if (err) return res.json("Error")
      return res.json(data); 

      })
    }) 

   
    app.get('/max', (req, res) => {
      const sql = "SELECT id, Region, COUNT(id) AS count FROM sample WHERE Region= 'April' GROUP BY id ORDER BY COUNT(id) DESC;  "; 
      db.query(sql, (err, data) => {
        
      console.log(data)

        if(err) return res.json("Error inside Database");
        return res.json(data);
      })
  })

  app.get('/view/:id/:region', (req, res) => {
    const id = req.params.id;
    const region = req.params.region; 
    const sql = "SELECT id, Email FROM sample WHERE id = ? AND Region = ?"; 
    db.query(sql, [id,region], (err, data) => {
      if(err) return res.json("Error inside Database");
      return res.json(data);
    })
})
  


  

app.listen(8081, ()=> {
    console.log("listening");
    
})