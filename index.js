import express from "express";
import { db } from "./fbconfig.js";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import cors from 'cors'
import { app as waitlist } from "./routes/waitlist/waitlistOps.js"
import { list } from "./routes/apiList/list.js";
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ['http://localhost:3000', 'https://morlabsprotocol.vercel.app'],

}))
app.options('*', cors());
app.get("/", (req, res) => {
    res.send("Welcome to the root route!");
})

app.use("/api/v0/waitlist", waitlist)
app.use("/api/v0/apis", list)

app.get("/waitlist", async (req, res) => {

    let data = await getDocs(collection(db, "user-waitlist"))
    // console.log(data)
    let info = data.docs.map((i) => i.data());

    // console.log(email)
    res.send(info)
})


app.listen(3002)