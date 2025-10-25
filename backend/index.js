import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.get('/jokes',(req , res)=>{
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts.",  
        "What do you call fake spaghetti? An impasta!",
        "Why did the bicycle fall over? Because it was two-tired!"
    ];
    res.send(jokes);
});

    

const PORT = process.env.PORT || 3000; // check karega environment variable PORT, agar nahi milega to 3000 use karega
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
export default app; 
// export kar rahe hain app ko taaki testing ya dusre modules me use kar sakein

