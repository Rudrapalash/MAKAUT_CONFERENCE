const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configure Multer for file uploads
const upload = multer({ dest: 'public/images/' });

// Update Hero Section
app.post('/update-hero', upload.single('heroImage'), (req, res) => {
    const { heroTitle, heroDescription, heroButtonUrl, heroVideo } = req.body;
    const heroImage = req.file ? `/images/${req.file.filename}` : null;

    const content = {
        heroTitle,
        heroDescription,
        heroButtonUrl,
        heroImage,
        heroVideo,
    };

    fs.writeFileSync('public/content/hero.json', JSON.stringify(content));
    res.send('Hero section updated successfully!');
});

// Update About Section
app.post('/update-about', upload.single('aboutImage'), (req, res) => {
    const { aboutTitle, aboutDescription } = req.body;
    const aboutImage = req.file ? `/images/${req.file.filename}` : null;

    const content = {
        aboutTitle,
        aboutDescription,
        aboutImage,
    };

    fs.writeFileSync('public/content/about.json', JSON.stringify(content));
    res.send('About section updated successfully!');
});

// Update Speakers Section
app.post('/update-speakers', upload.single('speakerImage'), (req, res) => {
    const { speakerName, speakerRole } = req.body;
    const speakerImage = req.file ? `/images/${req.file.filename}` : null;

    const content = {
        speakerName,
        speakerRole,
        speakerImage,
    };

    fs.writeFileSync('public/content/speakers.json', JSON.stringify(content));
    res.send('Speakers section updated successfully!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


function upadteDBField(field, obj) {
    
}