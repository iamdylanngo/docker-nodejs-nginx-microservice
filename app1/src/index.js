const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.status(200).json({
    data: {
      id: '1',
      type: 'app1/v1/',
      attributes: {
        name: 'welcome app1',
      }
    }
  })
})

app.get('/v1/get-name', (req,res) => {
  res.status(200).json({
    data: {
      id: '1',
      type: 'app1',
      attributes: {
        name: 'This is application 1',
        class: 'C01'
      }
    }
  })
})
app.listen(3000, () => {
  console.log('App is running at port 3000');
})