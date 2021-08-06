const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname +'/date.js')

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     let today = new Date();
//     var currentDay = today.getDay();
//     let day = "";
//     // if (currentDay === 6 || currentDay === 0) {
//     //     // res.send("Yay!!! iT's weekend");
//     //     day = "weekend";
//     // }
//     // else {
//     //     // res.send("It's weekday")
//     //     day = "Weekday";
//     // }

//     switch (currentDay) {
//         case 0:
//             day = "Sunday";
//             break;

//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;
//         default:
//             console.log("Not a correct day");
//             break;

//     }

//     res.render("list", { kindOfDay: day });


// })
const items = ["Buy Food","Eat Food","Go for shopping"];
const workItems = [];
app.get('/',(req,res)=>{
    
    const day = date.getDate();
    res.render("list",{ListTitle : day, newListItems:items});
});
app.post('/',(req,res)=>{
    const item =  req.body.list;
    // console.log(req.body.newItem);
    if(req.body.newItem == "work"){
        // console.log("i m in work")
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect('/');
    }
    
    
    
})
app.get('/work',(req,res)=>{
    res.render("list",{ListTitle : "work List", newListItems:workItems})
})

app.get('/about',(req,res)=>{
res.render("about");
});

app.listen(process.env.PORT || '3000', () => {
    console.log('Server up & running in port 3000 ');
})