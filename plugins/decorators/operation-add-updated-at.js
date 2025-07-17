module.exports = OperationAddUpdatedAt;

function OperationAddUpdatedAt() {
  return {
    Operation: {
      leave(target) {
        if(target.tags[0] === 'Operations') {
          target['x-updatedAt'] = new Date().toISOString();
        }
      },
    },
  }
};


