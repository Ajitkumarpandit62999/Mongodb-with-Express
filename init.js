const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


let AllChats = [
    
        {
          from: "Alice",
          to: "Bob",
          msg: "Hey, how's it going?",
          created_at: new Date()
        },
        {
          from: "Bob",
          to: "Alice",
          msg: "Good, just working. You?",
          created_at: new Date()
        },
        {
          from: "Alice",
          to: "Bob",
          msg: "Same here, a bit busy.",
          created_at: new Date()
        },
        {
          from: "Charlie",
          to: "Alice",
          msg: "Are you coming to the meeting later?",
          created_at: new Date()
        },
        {
          from: "Alice",
          to: "Charlie",
          msg: "Yeah, I'll be there by 3.",
          created_at: new Date()
        },
        {
          from: "Bob",
          to: "Charlie",
          msg: "Do you have the presentation ready?",
          created_at: new Date()
        },
        {
          from: "Charlie",
          to: "Bob",
          msg: "Almost done, just adding the final touches.",
          created_at: new Date()
        },
        {
          from: "Alice",
          to: "Bob",
          msg: "Don't forget to review the notes I sent.",
          created_at: new Date()
        },
        {
          from: "Bob",
          to: "Alice",
          msg: "Got it. Will do!",
          created_at: new Date()
        },
        {
          from: "Charlie",
          to: "Alice",
          msg: "Can you check the document for errors?",
          created_at: new Date()
        },
        {
          from: "Alice",
          to: "Charlie",
          msg: "Sure, send it over.",
          created_at: new Date()
        },
        {
          from: "David",
          to: "Alice",
          msg: "Is the report ready?",
          created_at: new Date()
        },
        {
          from: "Alice",
          to: "David",
          msg: "Yes, just finishing up.",
          created_at: new Date()
        },
        {
          from: "Charlie",
          to: "David",
          msg: "I'll share the slides by noon.",
          created_at: new Date()
        },
        {
          from: "David",
          to: "Charlie",
          msg: "Thanks! Looking forward to it.",
          created_at: new Date()
        },
        {
          from: "Bob",
          to: "Alice",
          msg: "Lunch later?",
          created_at: new Date()
        },
        {
          from: "Alice",
          to: "Bob",
          msg: "Sounds good! Let's go at 1.",
          created_at: new Date()
        },
        {
          from: "Charlie",
          to: "Bob",
          msg: "Joining you guys for lunch?",
          created_at: new Date()
        },
        {
          from: "Bob",
          to: "Charlie",
          msg: "Sure! Meet us at the cafe.",
          created_at: new Date()
        },
        {
          from: "David",
          to: "Bob",
          msg: "Can you send me the file from the meeting?",
          created_at: new Date()
        },
        {
          from: "Bob",
          to: "David",
          msg: "On it. Sending now.",
          created_at: new Date()
        },
        {
          from: "Alice",
          to: "Charlie",
          msg: "Did you review the proposal?",
          created_at: new Date()
        },
        {
          from: "Charlie",
          to: "Alice",
          msg: "Yes, looks good to me!",
          created_at: new Date()
        },
        {
          from: "David",
          to: "Alice",
          msg: "I have a few suggestions. Let's discuss later.",
          created_at: new Date()
        },
        {
          from: "Alice",
          to: "David",
          msg: "Sure, let's catch up after the meeting.",
          created_at: new Date()
        }
       
      
]


Chat.insertMany(AllChats);
