const db = require("../models");
const WeeklyTaskList = db.weeklyTaskList;

exports.saveWeeklyTaskListData = (req, res) => {
    console.log(req.body)
    res.status(200).send({ message: "Weekly Task List Successfully Received" });

    const wtl = new WeeklyTaskList({
        name: req.body.name
    });

    wtl.save((err, wtl) => {
        if(err) {
            res.status(500).send({message: err});
            return;
        };
        console.log("Weekly Task List Successfully Saved");
    });
}



// exports.saveWeeklyTaskListData = (req, res) => {
//     console.log(req.body.name)
//     const mmc = new MultiMonthCalendar({
//         name: req.body.name
//       });

//       mmc.save((err, mmc) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         }
//       });
// }