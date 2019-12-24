var express = require('express');
const chalk = require('chalk');
var router = express.Router();
const db = require('../data');

// middleware that is specific to this router
router.use((req, res, next)=> {
  console.log('[project] Time: ', Date.now());
  next();
})

router.get('/:id', async function (req, res) {
  const emp = await db.getProjectById(req.params.id);
  res.json(emp);
})

module.exports = router