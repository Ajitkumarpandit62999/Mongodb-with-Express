const express = require("express");
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set("views" , path.join(__dirname , "views"));
app.set("views engine" , "ejs");

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

main().then(()=>{
    console.log("connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

app.listen(port , ()=>{
    console.log(`server is listening : ${port}`);
})


// ---------------------------------------------------------------------------------------------------------------------------------------------------->


app.get("/" , async (req , res)=>{
    let chats = await Chat.find({});
    res.render("index.ejs" , {chats})
})


// create a new form to add new chat ----->


app.get("/new" , async (req , res)=>{
    res.render("AddNewChat.ejs")
})

app.post("/" , async (req , res)=>{
     const { from, to, msg, created_at } = req.body;
    Chat.insertMany({from:`${from}` , to:`${to}` , msg:`${msg}`, created_at:`${created_at}` });
    res.redirect("/");
})

app.patch('/:id',async (req, res) => {
    const chatId = req.params.id;
    const chat = await Chat.findById(chatId);
    res.render("EditForm.ejs" , {chat});
})

app.put('/:id' , async (req , res)=>{
    let chatId = req.params.id;
    let {msg , created_at} = req.body;
    await Chat.findByIdAndUpdate({_id:chatId} , {msg:`${msg}`} , {created_at:`${created_at}`} , {new:true}).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/");
})

app.delete("/:id" , async (req , res)=>{
    const {id} = req.params;
    await Chat.findByIdAndDelete(`${id}`);
    res.redirect("/");
})