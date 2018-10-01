// import express from 'express';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// /* import User from './src/models/users';
// import Message from './src/models/messages';
// import Device from './src/models/devices'; */
// import graphQLHTTP from 'express-graphql';
// import schema from './src/graphql/index';
// import { PubSub } from 'graphql-subscriptions';
// import {createToken} from './src/resolvers/create'
// import {verifyToken} from './src/resolvers/verify'
// import timestampToDate from 'date-from-timestamp'
// import { execute, subscribe } from 'graphql'
// const { SubscriptionServer } = require('subscriptions-transport-ws');
// const { createServer } = require('http');
// import { WebSocketLink } from 'apollo-link-ws';
// import { split } from 'apollo-link';
// import { HttpLink } from 'apollo-link-http';
// import { WebSocketLink } from 'apollo-link-ws';
// import { getMainDefinition } from 'apollo-utilities';

// let bandera = false;
// let ultimoFolio;

// export const pubsub = new PubSub();

// const httpLink = new HttpLink({
//     uri: 'http://localhost:3000/graphql'
//   });
  
//   // Create a WebSocket link:
//   const wsLink = new WebSocketLink({
//     uri: `ws://localhost:5000/`,
//     options: {
//       reconnect: true
//     }
//   });
  
//   // using the ability to split links, you can send data to each link
//   // depending on what kind of operation is being sent
//   const link = split(
//     // split based on operation type
//     ({ query }) => {
//       const { kind, operation } = getMainDefinition(query);
//       return kind === 'OperationDefinition' && operation === 'subscription';
//     },
//     wsLink,
//     httpLink,
//   );
// function Unix_timestamp(t)
// {
//     let dt = new Date(t*1000);
//     let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     let year = dt.getFullYear();
//     let month = months[dt.getMonth()];
//     let date = dt.getDate();
//     const restart = 0;
//     let hr = dt.getHours();
//     let m = "0" + dt.getMinutes();
//     let s = "0" + dt.getSeconds();
//     return /*date + '/' + month + '/' + year + ' ' + */hr + ':' + m.substr(-2)/* + ':' + s.substr(-2)*/;
// }


// const app = express();
// const PORT = process.env.PORT || 3000

// mongoose.connect('mongodb://iotaxi1:sistemasiotaxi1@ds157614.mlab.com:57614/iotaxi')
// const db = mongoose.connection;
// db.on('error',()=> console.log("Error al conectar a la BD"))
//     .once('open',() => console.log("Conectado a la BD!!"))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.post('/signup',(req,res) => {
//     let user = req.body
//     User.create(user).then((user) => {
//         return res.status(201).json({"message":"Usuario Creado",
//             "id":user._id})
//     }).catch((err) =>{
//         console.log(err);
//         return res.json(err);
//     })
// });


// app.post('/login', (req,res) => {
//     const token  = createToken(req.body.email,req.body.password).then((token) => {
//         res.status(201).json({token});
//     }).catch(() => {
//         res.status(403).json({
//             message:"Login Failed!!!! :( Invalid credentials"
//         })
//     })
// })

// app.post('/createMessage',(req,res) => {

//     User.findByIdAndUpdate(message.device,{$push:{devices:message.timestamp}},(err,user) => {
//         return user;
//     })


//     let message = req.body
//     console.log(message)
//     Message.create(message).then((message) => {
//         console.log(message.timestamp,"aqui chido")
//         let hora = Unix_timestamp(message.timestamp);
//         console.log(hora)

//         if(hora>= '4:00' && hora <='5:00'){
//             console.log("ENTRO RESET")
//             Device.findByIdAndUpdate(message.device,{$set:{contEfectivo:0, contKm:0, contTime:0, contTravel:0}},(err,dev) => {
//                 return dev
//             })
//         }

//         if(message.data.length === 12){
//             if(message.data.indexOf('00') === 0 || message.data.indexOf('01') === 0){
//                 console.log("entro")
//                 let pesos = message.data.substr(0,4);
//                 let cent = message.data.substr(4,2);
//                 let cash = Number(pesos+"."+cent);
//                 let km = Number(message.data.substr(6,3));
//                 let time = Number(message.data.substr(9,3));
//                 console.log(cash,",",km,",",time)
//                 Device.findByIdAndUpdate(message.device,{$inc:{contEfectivo:cash, contKm:km, contTime:time, contTravel:1}},(err,dev) => {
//                     return dev
//                 })
//                 console.log("salio")

//             }else{
//                 Device.findByIdAndUpdate(message.device,{$set:{lastLocation:message.data}},(err,dev) => {
//                     return dev
//                 })
//             }
//         }
//         return res.status(201).json({"message":"Mensaje creado", "id":message._id})
//     }).catch((err)=>{
//         console.log(err);
//         return res.json(err)
//     }) 
// })

// app.post('/addDevice',(req,res) => {
//     let device = req.body
//     console.log(device)
//     Device.create(device).then((device) => {
//         return res.status(201).json({"message":"Dispositivo Creado","id":device._id})
//     }).catch((err)=>{
//         console.log(err);
//         return res.json(err)
//     })
        
// })

// /* app.use('/graphql',graphQLHTTP((req,res)=>({
//     schema,
//     graphiql:true,
//     pretty:true,
//     context:{
//         user:req.user
//     }
// }))) */

// app.use('/graphql', bodyParser.json(), graphqlExpress({
//     schema
//   }));
  
//   app.use('/graphiql', graphiqlExpress({
//     endpointURL: '/graphql',
//     subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
//   }));

// /* app.use(
//     '/graphql',
//     graphqlExpress({
//       schema
//     })
//   ); */

// /* app.use(
//     '/graphiql',
//     graphiqlExpress({
//         endpointURL: '/graphql',
//         subscriptionsEndpoint: 'ws://localhost:3000/subscriptions'
//     })
// ) */

// app.get('/',(req,res) => {
//     res.send("Estoy funcionando :)")
// })

// /* const server = createServer(app);
// server.listen(PORT, () => {
//     console.log(`Server now running at port ${PORT}`);
//     new SubscriptionServer(
//         {
//             execute,
//             subscribe,
//             schema
//         },
//         {
//             server,
//             path: '/subscriptions'
//         }
//     );
// }); */

// const ws = createServer(server);
// ws.listen(PORT, () => {
//   console.log(`Apollo Server is now running on http://localhost:${PORT}`);
//   // Set up the WebSocket for handling GraphQL subscriptions
//   new SubscriptionServer({
//     execute,
//     subscribe,
//     schema
//   }, {
//     server: ws,
//     path: '/subscriptions',
//   });
// });