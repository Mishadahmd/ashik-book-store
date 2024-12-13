const Order = require("./order.model");

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error("Error creating product", error);
        res.status(500).json({ message: "Failed to create order" });
    }
};

const getOrderByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const orders = await Order.find({ email }).sort({ createdAt: -1 });
        if (!orders) {
            res.status(404).json({ message: "No orders found" });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching product", error);
        res.status(500).json({ message: "Failed to fetch order" });
    }
};

module.exports = {
    createOrder,
    getOrderByEmail,
};
