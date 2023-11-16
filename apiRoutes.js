const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('./app');

// Define a route to get questions
router.get('/questions', async (req, res) => {
  const database = await connectToDatabase();
  const collection = database.collection('users');

  try {
    // Fetch all documents from the collection
    // const query = {};
    const query={
        // language:"Python",
        // Level:"Medium"
    };

    const projection={
        _id:0,
        question:1,
        Options:1
    };
    const cursor = collection.find(query).project(projection);
    // const cursor = collection.find(query);

    // Convert the cursor to an array
    const questionsList = await cursor.toArray();
    console.log(questionsList.length)
    res.json(questionsList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

router.get('/solutions', async (req, res) => {
    const database = await connectToDatabase();
    const collection = database.collection('users');
  
    try {
      // Fetch all documents from the collection
      // const query = {};
      const query={
          question:"How do you read from and write to a file in Python? Provide an example.",// Question 
          
      };
  
      const projection={
          _id:0,
          correct_ans:1
      };
      const choosen="an use the 'open' functio";     // Option that We have Choosed 
      const cursor = collection.find(query).project(projection);
      // const cursor = collection.find(query);
  
      // Convert the cursor to an array
      const questionsList = await cursor.toArray();
      console.log(questionsList.length)
      if(choosen==questionsList[0]["correct_ans"]){
        res.json("True");
      }
      else{
        res.json("False");
      }
    //   console.log(questionsList.length)
    //   res.json(questionsList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  });

module.exports = router;


