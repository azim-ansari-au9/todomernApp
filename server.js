const express = require('express');
const path = require('path');
const mongoInit = require('./dbConnection/mongoConnection')
const userRoutes = require('./routes/api/userRoutes')
const authRoutes = require('./routes/api/authRoutes')
const boardRoutes = require('./routes/api/boardRoutes')
const cardRoutes = require('./routes/api/cardRoutes')
const listRoutes = require('./routes/api/listRoutes')
const checkListRoutes = require('./routes/api/checklistRoutes')
require('dotenv').config();


const app = express();
mongoInit();


// Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/lists', listRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/checklists',checkListRoutes );

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT} !!` ));
