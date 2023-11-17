// const express = require('express')
// const path=require('path')
// const app = express()
// const port = 4000
// // const birds=(require('./routes/blog'))

// app.use(express.static(path.join(__dirname,'static')))
// app.use('/',require(path.join(__dirname,'routes/blog.js')))


// app.listen(port, () => {
//   console.log(`Blog app listening on port ${port}`)
// })


// const express = require('express')
// const path=require('path')
// const app = express()
// const port = 4000


// const harryMiddleware=(req,res,next)=>{
//     console.log(req)
//     next()
// }

// // app.use(express.static(path.join(__dirname,"public")))
// app.use(harryMiddleware)

// app.get('/hello/:name', (req, res) => {
//   res.send('Hello World!' + req.params.name)
// })

// app.get('/', (req, res) => {
//     res.send('Heljhbjj d!')
//   })

// app.get('/about', (req, res) => {
//     // res.send('Hiiii This is About Page')
//     res.sendFile(path.join(__dirname,"index.html"))
//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// const express = require('express');
// const app = express();
// const port = 4000; // You can choose any available port

// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });


// const { MongoClient } = require('mongodb');
// const fs = require('fs');

// const uri = URL

// async function insertQuestionsFromJSON() {
//   const client = new MongoClient(uri, { useUnifiedTopology: true });

//   try {
//     await client.connect();

//     const database = client.db('mernstack');
//     const collection = database.collection('users');

//     // Read data from the JSON file
//     const data = fs.readFileSync('javascript.json', 'utf8');
//     const questionsList = JSON.parse(data);
//     // console.log(questionsList)
//     // // // Insert the entire list into the collection
//     // const insertResult = await collection.insertMany(questionsList);
//     // console.log(`Inserted ${insertResult.insertedCount} document(s) into the 'users' collection.`);
//     // const deleteResult = await collection.deleteMany({}); // Empty filter matches all documents
//     // console.log(`Deleted ${deleteResult.deletedCount} document(s) from the 'users' collection.`);
//   } finally {
//     await client.close();
//   }
// }

// insertQuestionsFromJSON().catch(console.error);


// // Import API routes
// const apiRoutes = require('./apiRoutes');
// app.use('/api', apiRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });





// const express = require('express');
// const app = express();
// const port = process.env.PORT || 4000; // Use the provided port or 4000 as a default

// app.use(express.json());

// // Define routes
// const apiRoutes = require('./apiRoutes');
// app.use('/api', apiRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });





const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000; // Use the provided port or 4000 as a default
const { MongoClient } = require('mongodb');
const URL = process.env.URL;

const client = new MongoClient(URL, { useUnifiedTopology: true });

async function connectToDatabase() {
  await client.connect();
  return client.db('mernstack');
}

module.exports = { connectToDatabase };

app.use(express.json());

// Define routes
const apiRoutes = require('./apiRoutes');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

