import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.get('/jokes',(req , res)=>{
    const jokes = [
        { 
          id : 1, 
          title: "Why did the chicken cross the road?", 
          content: "Why don't scientists trust atoms?" 
        },

        { 
          id : 2, 
          title: "What do you call a bear with no teeth?",
          content: "Why did the scarecrow win an award?!" 
        },

        { 
          id : 3,
          title: "Why don't skeletons fight each other?",
          content: "They don't have the guts." 
         },

        { 
          id : 4,
          title: "What do you call fake spaghetti?",
          },

        { 
          id : 5,
          title: "Why did the math book look sad?", 
          content: "An impasta!" 
        },
        
    ];
    res.send(jokes);
});

    

const PORT = process.env.PORT || 3000; // check karega environment variable PORT, agar nahi milega to 3000 use karega
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
export default app; 
// export kar rahe hain app ko taaki testing ya dusre modules me use kar sakein

