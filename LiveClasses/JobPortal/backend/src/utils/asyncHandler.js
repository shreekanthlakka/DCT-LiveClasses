import { CustomError } from "./customError.js";

const asyncHandler = (func) => {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next)).catch((error) => {
            console.log(error, " <==error");
            next(new CustomError(error.status, error.message, error));
        });
    };
};

export { asyncHandler };
