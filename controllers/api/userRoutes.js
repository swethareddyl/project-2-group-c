const router = require('express').Router();
const { User, Weapon, Armor } = require('../../models');

//GET api/users

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//GET single user

router.get('/:username', (req, res) => {
    User.findOne({
        where: {
            username: req.params.username
        },
        include: [
            {
                model: Weapon,
            },
            {
                model: Armor,
            }
        ]
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'No user found with this username' })
            return;
        }
        res.json(userData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// LOGIN

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!userData) {
            res.status(400).json({ message: 'No user with that e-mail address' })
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' })
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            req.session.email = userData.email
            res.json({ user: userData, message: 'You are now logged in!' })
        });
    } catch (err) {
        console.log(err)
        res.send()
    }
});

// LOGOUT

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      })
    }
    else {
      res.status(404).end();
    }
  });

// POST /api/users
router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      platform: req.body.platform
    })
    .then(userData => {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
        req.session.email = userData.email
    
        res.json(userData);
      });
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errors: err.errors.map(e => e.message) })
    }) ;
  });

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'No user found with this id' })
            return;
        }
        res.json(userData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;