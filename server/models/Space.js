const mongoose = require('mongoose');

const SpaceSchema = new mongoose.Schema({
  spaceName: { 
    type: String 
  },
  availableFrom: { 
    type: String 
  },
  rate: { 
    type: String 
  },
  latitude: { 
    type: String
  },
  longitude: { 
    type: String 
  },
  thumbnailImage: { 
    type: String 
  }
})

module.exports = mongoose.model('Space', SpaceSchema);