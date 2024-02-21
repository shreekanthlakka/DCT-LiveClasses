import Expances from "../models/expance.model.js";
import { validationResult } from "express-validator";

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

const createAnExpence = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        const { amount, category, description, expanceDate } = req.body;
        const createdExpence = Expances.create({
            amount,
            category,
            description,
            expanceDate,
        });
        if (!createdExpence) {
            throw new Error("Error creating the expance");
        }
        res.status(201).json({
            success: true,
            data: createdExpence,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            data: null,
            message: error.message,
        });
    }
};

export { getAllExpances, createAnExpence };
