'use strict';

var _require = require('graphql-subscriptions'),
    PubSub = _require.PubSub,
    withFilter = _require.withFilter;

var pubsub = new PubSub();

var messages = [];

var resolvers = {
  Query: {
    getMessages: function getMessages(parentValue, params) {
      return messages;
    }
  },
  Mutation: {
    addMessage: function addMessage(parentValue, _ref) {
      var message = _ref.message;

      messages.push({ message: message });

      pubsub.publish('newMessageAdded', {
        newMessageAdded: { message: message }
      });

      return messages;
    }
  },
  Subscription: {
    newMessageAdded: {
      subscribe: withFilter(function () {
        return pubsub.asyncIterator('newMessageAdded');
      }, function (params, variables) {
        return true;
      })
    }
  }
};

module.exports = resolvers;