import mongoose from "mongoose";

const recuiterSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        companyName: {
            type: String,
        },
        email: {
            type: String,
        },
        website: {
            type: String,
        },
        address: {
            type: String,
        },
    },
    { timestamps: true }
);

const Recuiter = mongoose.model("Recuiter", recuiterSchema);

export default Recuiter;

/**
 *
 * userId
 * companyName
 * email
 * website
 * address
 */
