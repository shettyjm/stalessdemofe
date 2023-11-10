const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const backendApiUrl = process.env.BACKEND_API_URL || 'https://voteapp.yourmockorrealapi.cloud';

app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
 // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.render('index', { backendApiUrl });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
