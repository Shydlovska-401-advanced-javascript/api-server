'use strict';

class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  get(id) {
    if (id) {
      return this.schema.findById(id);
    }
    else {
      return this.schema.find({});
    }
  }

  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
        console.log(_id, record, 'id and record is here')
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
        return this.schema.findByIdAndDelete(_id);
      }
}

module.exports = DataModel;