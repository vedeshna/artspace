const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

const data = [
    {
        _id: '1',
        name: "VEDESHNA'S ART",
        description: 'HER LIFE IS HER ART',
        image: 'assets/images/artistone.svg'
    },
    {
        _id: '2',
        name: "EMSTERDAM",
        description: 'HER ART IS YOUR WELL-BEING',
        image:'assets/images/artisttwo.svg'
    },
    {
        _id: '3',
        name: "MELANIE ILLUSTRATIONS",
        description: 'test',
        image:'assets/images/artistthree.svg'
        
    },
    {
        _id: '4',
        name: "MAYBELAE",
        description: 'test',
        image:'assets/images/artistfour.svg'
    },
]

router.get('/', (req, res) => {
    res.send('hello')
});

router.post('/signup', async (req, res) => {
    const { email, username, password } = req.body; //requesting email 
    const newUser = new User({email, username, password}); //creating new user 
    await newUser.save();
		const token = await jwt.sign({_id: newUser._id}, 'secretkey'); //response
    res.status(200).json({token});
});

router.post('/signin', async (req, res) => {
    const { email,username, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(401).send('The email doesn\'t exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');  //response error mgs

		const token = jwt.sign({_id: user._id}, 'secretkey');

    return res.status(200).json({token});
})
//artists info - /artist is an endpoint don't forget !
router.get('/artists', (req, res) => {
    //table of data for artists 
    res.json(data)
});

router.get('/artists/:id', (req,res) =>{
    const artistId = req.params.id;

    const artist = data.find(_artist => _artist._id === artistId);

    res.json(artist);
})

module.exports = router;
