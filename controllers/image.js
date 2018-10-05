const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '14800b9a0e82418888c1aad1eaf400de'
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
