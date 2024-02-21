const categoryValidationSchema = {
    categoryname: {
        in: ["body"],
        exists: {
            errorMessage: "categoryname field is required",
        },
        notEmpty: {
            errorMessage: "categoryname cannot be empty",
        },
    },
};

export { categoryValidationSchema };
