
import User from "../models/user.models.js"; 

export const getCurrentUser = async (req, res) => {
    try {
        // Use req.user._id, which is set by the corrected isAuth middleware
        const userId = req.user._id; 

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        return res.status(200).json(user);

    } catch (err) {
        // Log the actual error on the server for debugging
        console.error("Get Current User Error:", err.message);

        // Use a 500 status for unexpected server errors
        return res.status(500).json({ message: "Internal Server Error" });
    }
};