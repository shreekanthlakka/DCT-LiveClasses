import express from "express";
import Category from "../models/categories.model.js";

const getallCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        if (!categories) {
            throw new Error("no categories");
        }
        res.json({
            success: true,
            data: categories,
        });
    } catch (error) {
        res.json({
            success: false,
            data: null,
            message: error.message,
        });
    }
};

const createCategory = async (req, res) => {
    const { categoryname } = req.body;
    try {
        const createdcategory = await Category.create({
            categoryname,
        });
        if (!createdcategory) {
            throw new Error("not able to create category");
        }
        res.status(200).json({
            success: true,
            data: createdcategory,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            data: null,
            message: error.message,
        });
    }
};

export { getallCategories, createCategory };
