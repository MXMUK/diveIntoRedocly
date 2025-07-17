const OperationAddUpdatedAt = require('./decorators/operation-add-updated-at.js');

module.exports = function AddUpdatedAtPlugin() {
  return {
    id: 'add-updated-at',
    decorators: {
      oas3: {
        "operation-add-updated-at": OperationAddUpdatedAt
      }
    }
  }
};
