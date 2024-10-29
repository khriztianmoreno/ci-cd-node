const { Router } = require('express');

const router = Router();

router.get('/', (_, res) => {
  res.json({ message: 'task' });
});

module.exports = router;
