import { Router } from "express";
export let app = Router()
app.post("/waitlist", async (req, res) => {

    let { email, username } = req.body
    let data = await getDocs(collection(db, "user-waitlist"))
    let info = data.docs.map((i) => i.data());
    let emails = info.map((i) => i.email)
    if (emails.includes(email)) {
        return res.send({ ok: false, message: "Email already exists" })

    }
    if (!email || !username) {
        return res.send({ ok: false, message: "Some details are missing, Kindly ensure both email and username are available" })

    }

    try {
        addDoc(collection(db, "user-waitlist"), {
            email, username
        })
        return res.send({
            message: "Done !",
            email, username, ok: true
        })
    }
    catch (e) {
        return res.send({
            message: `Error saving user`,
            ok: false
        })
    }

})

