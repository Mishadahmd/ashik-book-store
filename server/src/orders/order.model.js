const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            street: String,
            city: {
                type: String,
                required: true,
            },
            country: String,
            state: String,
            zipcode: String,
        },
        phone: {
            type: Number,
            required: true,
        },
        productIds: [
            {
                type: Schema.Types.ObjectId,
                ref: "Book",
                required: true,
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Order = model("Order", orderSchema);

module.exports = Order;
