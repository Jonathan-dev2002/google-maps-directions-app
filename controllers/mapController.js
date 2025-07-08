exports.getMap = (req, res) => {

  res.render('directions', {
    apiKey: process.env.Maps_API_KEY
  });
};