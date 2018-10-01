'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolvers = exports.pubsub = undefined;

var _graphql = require('graphql');

var _graphqlSubscriptions = require('graphql-subscriptions');

/* import Device from '../../../models/devices';
import {DeviceInputType, DeviceType} from '../../types/devices'; */

var pubsub = exports.pubsub = new _graphqlSubscriptions.PubSub();

var SOMETHING_CHANGED_TOPIC = 'something_changed';

var resolvers = exports.resolvers = {
    Subscription: {
        somethingChanged: {
            subscribe: (0, _graphqlSubscriptions.withFilter)(function () {
                return pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC);
            }, function (payload, variables) {
                return payload.somethingChanged.id === variables.relevantId;
            })
        }
    }
    /* export default {
        type:DeviceInputType,
        args:{
            id:{
                name:"ID",
                type:new GraphQLNonNull(GraphQLID)
            },
            data:{
                name:"data",
                type:new GraphQLNonNull(DeviceInputType)
            }
        },
        resolve(root,params){
            return Device.findById(params.id
            ).then((device)=> {
                return device
            }).catch((err)=>{
                throw new Error("Error al hacer update")
            })
        }
    } */

};