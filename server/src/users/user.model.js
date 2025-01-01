const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Presave hook for password hashing
userSchema.pre("save", async function (next) {
    // check if the password has been modified
    if (!this.isModified("password")) return next();

    // Generate the hash salt and hash password
    this.password = await bcrypt.hash(this.password, 10);
    next(); // Proceed to save
});

const User = model("User", userSchema);

module.exports = User;
