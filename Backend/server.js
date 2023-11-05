const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const Pusher = require("pusher");
const taskRoutes = require("./routes/taskRoute.js");
const msgRoutes = require("./routes/msgRoute.js");
const pusher = new Pusher({
    appId: "1688460",
    key: "01c0a67ab217893ca935",
    secret: "7a0cde9909c441d90fe6",
    cluster: "ap2",
    useTLS: true
  });


const corsOptions = require('./config/corsOptions.js')


app.use(cors(corsOptions));
app.use(express.json());

//Mongo DB connection
const dbURL = "mongodb+srv://root:admin@whatsapp.twhanns.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURL);

const db = mongoose.connection;
db.once("open", () => {
    console.log("db connected");

    const roomCollection = db.collection("rooms");
    const changeStream = roomCollection.watch();

    changeStream.on("change",(change)=>{
        console.log(change);
        if(change.operationType === "insert"){
            const roomDetails = change.fullDocument;
            pusher.trigger("room","inserted",roomDetails);
        }
        else{
            console.log("Not expected event to trigger");
        }
    }
    );

    const messageCollection = db.collection("messages");
    const changeStream1 = messageCollection.watch();

    changeStream1.on("change",(change)=>{
        if(change.operationType === "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger("message","inserted",messageDetails);
        }
        else{
            console.log("Not expected event to trigger");
        }
    }
    )
});

// app.get("/", (req, res) => {
//     res.send("Hello from Backend");
// });

app.use('/group/create',taskRoutes);
app.use('/messages',msgRoutes);

app.use('/all/rooms',taskRoutes);
app.use('/rooms',taskRoutes);

app.listen(7000, () => {
    console.log("Server is up and running");
});
