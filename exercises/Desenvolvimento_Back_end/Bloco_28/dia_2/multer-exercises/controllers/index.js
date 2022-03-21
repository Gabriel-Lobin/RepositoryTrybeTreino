const ping = require('./ping');

const validUpload = async (req, res, next) => {  
  if (!req.file.filename.includes('.png')) return req.status(403).json({
    "error": { "message": "Extension must be `png`" }
  });

  res.status(200).json({ body: req.body, file: req.file });
};

module.exports = {
  ping,
  validUpload,
};
