import express from "express";
import { db } from "./fbconfig.js";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send({ message: "Welcome to the root route!", status: 200 });
})

app.post("/waitlist", (req, res) => {

    let { email, username } = req.body
    if (!email) {
        res.status(400).send({ message: "Email is required" })
        return
    }
    try {
        addDoc(collection(db, "user-emails"), {
            email, username
        })
        res.send({
            message: "Done !",
            email, username, ok: true
        })
    }
    catch (e) {
        res.status(400).send({
            message: `Error saving user: ${e}`,
            ok: false
        })
    }

})

app.get("/waitlist", async (req, res) => {

    let data = await getDocs(collection(db, "user-emails"))
    let emails = data.docs.map((i) => i.data());
    res.send({ emails })
})


app.listen(3000, {
    cors: {
        origin: "*"
    }
})