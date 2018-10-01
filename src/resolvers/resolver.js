const { PubSub, withFilter } = require('graphql-subscriptions');
const pubsub = new PubSub();

const messages = [];

const resolvers = {
  Query: {
    getMessages(parentValue, params) {
      return messages;
    }
  },
  Mutation: {
    addMessage(parentValue, { message }) {
      messages.push({ message });

      pubsub.publish('newMessageAdded', {
        newMessageAdded: { message }
      });

      return messages;
    }
  },
  Subscription: {
    newMessageAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator('newMessageAdded'),
        (params, variables) => true
      )
    }
  }
};


module.exports = resolvers;