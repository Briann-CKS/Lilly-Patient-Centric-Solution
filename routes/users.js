const express = require ('express')
const router = express.Router()
const User = require('../models/user')

// Getting All
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err){
        res.status(500).json({ message: err.message})
    }
})

// Getting One
router.get('/:id', getUser, (req, res) => { 
    res.json(res.user)
})

// Creating One
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser) // always send 201 when creating something
    } catch (err) {
        res.status(400).json({ message: err.message})
    }

})

// // Updating One
// router.patch('/:id', getSubscriber, async (req, res) => {
//     if (req.body.name != null) {
//         res.subscriber.name = req.body.name
//     }
//     if (req.body.subscribedToChannel != null) {
//         res.subscriber.subscribedToChannel = req.body.subscribedToChannel
//     }
//     try {
//         const updatedSubscriber = await res.subscriber.save()
//         res.json(updatedSubscriber)
//     } catch (err) {
//         res.status(400).json({ message: err.message})
//     }
// })
// // update what the user passed to us instead of the all the info 
// // "put" is another way to update, but update the whole entity info  

// // Deleting One
// router.delete('/:id', getSubscriber, async (req, res) => {
//     try {
//         await res.subscriber.remove()
//         res.json({ message: "Deleted Subscriber"})
//     } catch (err) {
//         res.status(500).json({ message: err.message})
//     }
// })

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.user = user
    next()
}

module.exports = router