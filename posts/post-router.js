const express = require('express');

// database access using knex
const knex = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    knex.select('*')
    .from('posts')
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch ( error => {
        res.status(500).json({error: 'Failed to get posts from the database'});
    });
});

router.get('/:id', (req, res) => {
    knex.select('*')
    .from('posts')
    .where('id', '=', req.params.id)
    .first()
    .then(post => {
        res.status(200).json(post);
    })
    .catch ( error => {
        res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('posts')
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch ( error => {
        res.status(500).json({error: 'Failed to insert the post'});
    });
});

router.put('/:id', (req, res) => {
    knex('posts')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
        res.status(200).json(count);
    })
    .catch ( error => {
        res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
    knex('posts')
    .where({ id: req.params.id })
    .delete()
    .then(count => {
        res.status(200).json(count);
    })
    .catch ( error => {
        res.status(500).json(error);
    });  
});

module.exports = router;