const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.Clarifai_API
});

const handleApiCall = (req, res) => {
  app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

module.exports = {
  handleApiCall
}
