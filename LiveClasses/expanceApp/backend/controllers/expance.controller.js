import Expances from "../models/expance.model.js";

const getAllExpances = async (req, res) => {
    try {
        const expances = Expances.find();
        if (!expances) {
            throw new Error("Count found any expances");
        }
        res.status(200).json({
            success: true,
            data: expances,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            data: null,
            message: err.message,
        });
    }
};

export { getAllExpances };
