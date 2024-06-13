import Data from "../model/contact.model.js";

export const contact = async(req, res) => {
    try {
        const { fullname, email, gender, message } = req.body;
        const data = await Data.findOne({ email });
        
       
        const createdData = new Data({
            fullname: fullname,
            email: email,
            gender: gender,
            message: message,
        });
        await createdData.save();
        res.status(201).json({
            message: "User created successfully",
            data: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }

};