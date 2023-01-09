import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: "Healthy"
  })
})

app.listen(process.env.PORT || 3004, () => {
  console.log('running on port 3004')
})