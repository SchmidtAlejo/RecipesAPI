const create = require('../data/createData');

async function createData() {
    return create.createData();
  }

module.exports = {createData};
