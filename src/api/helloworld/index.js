const { Router } = require('express');

const router = Router();

router.get('/', (_, res) => {
  res.json({ message: 'hello world'})
});

module.exports = router;
