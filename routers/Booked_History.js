import express from 'express';

const historyRouter = express.Router();


let bookedHistory = [];


historyRouter.get("/", (req, res) => {
    try {
        res.send({ msg: 'Booking History', bookedHistory });
    } catch (err) {
        res.status(500).send({ msg: "Internal server error" });
    }
});


historyRouter.get("/:customerName", (req, res) => {
    const customerName = req.params.customerName;
    try {
        const customerBooking = bookedHistory.find((booking) => {
            return booking.customer === customerName;
        });
        if (customerBooking) {
            res.send(customerBooking);
        } else {
            res.status(404).send({ msg: "No Booking Found for this Customer" });
        }
    } catch (err) {
        res.status(500).send({ msg: "Internal server error" });
    }
});

historyRouter.post("/", (req, res) => {
    const newBooking = req.body;
    try {
        bookedHistory.push(newBooking);
        res.status(201).send({ msg: "Booking added successfully", booking: newBooking });
    } catch (err) {
        res.status(500).send({ msg: "Internal server error" });
    }
});

export default historyRouter;
