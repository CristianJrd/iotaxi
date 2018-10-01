import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'
import { PubSub } from 'graphql-subscriptions';
import { withFilter } from 'graphql-subscriptions';
/* import Device from '../../../models/devices';
import {DeviceInputType, DeviceType} from '../../types/devices'; */

export const pubsub = new PubSub();

const SOMETHING_CHANGED_TOPIC = 'something_changed';

export const resolvers = {
    Subscription: {
      somethingChanged: {
        subscribe: withFilter(() => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC), (payload, variables) => {
          return payload.somethingChanged.id === variables.relevantId;
        }),
      },
    },
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