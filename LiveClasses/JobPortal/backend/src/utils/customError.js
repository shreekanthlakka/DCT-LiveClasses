class CustomError extends Error {
    constructor(status, message = "something went wrong", error = []) {
        super(message);
        this.status = status;
        this.success = false;
        this.errors = error;
        this.data = [];
        this.message = message;
    }
}

export { CustomError };
