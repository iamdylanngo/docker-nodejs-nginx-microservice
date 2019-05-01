const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.status(200).json({
    data: {
      id: '1',
      type: '/app2/v1',
      attributes: {
        name: 'Welcome app2',
      }
    }
  })
})

app.listen(3001, () => {
  console.log('App is running at port 3001');
})
