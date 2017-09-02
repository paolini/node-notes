'use strict';

var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1" });

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "notes_notes",
};

module.exports.get_notes = (event, contex, callback) => {
  docClient.scan(params, (err, data) => {
    if (err) {
      console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
      return callback(err);
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify(data),
      };
      return callback(null, response);
    }
  });
};
