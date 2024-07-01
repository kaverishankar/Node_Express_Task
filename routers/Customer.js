import express from 'express';

const booking = [];

const customerRouter = express.Router();


customerRouter.get("/", (req, res) => {
    try {
        res.send({ msg: 'customers booking details', booking });
    }
    catch (err) {
        res.status(500).send({ msg: "Internal server error" });
    }
});


customerRouter.get("/:bookingId", (req, res) => {
    const bookingId = req.params.bookingId;
    try {
        const bookingData = booking.find((val) => val.id === bookingId);
        if(bookingData)
            {
                res.send({ ...bookingData });
            }
           else{
            res.status(402).send({ msg: "No Data Found" });
           } 
            
    }
    catch (err) {
        res.status(500).send({ msg: "Internal server error" });
    }
});


customerRouter.get("/status/:status", (req, res) => {
    const bookstatus = req.params.status;
    try {
        const bookedData = booking.filter((val) => val.bookingStatus === bookstatus);
        if (bookedData.length > -1) {
            res.send({ ...bookedData });
        } else {
            res.status(404).send({ msg: "No Data Found" });
        }
    } catch (err) {
        res.status(500).send({ msg: "Internal server error" });
    }
});


customerRouter.post("/", (req, res) => {
    const customerinfo = { ...req.body , id : Date.now().toString()};
    try {
        booking.push(customerinfo);
        res.send({ msg: 'Booked successfully' });
    }
    catch (err) {
        res.status(500).send({ msg: "Internal server error" });
    }
});

export default customerRouter;