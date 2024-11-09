import User from "../model/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
      //console.log("Request user ID:", req.user._id);
      
      const loggedInUsers = req.user._id;
      //console.log("Logged in user ID:", loggedInUsers);
  
      const allUsers = await User.find({_id: {$ne: loggedInUsers}}).select("-password");
      // console.log("Found users:", allUsers);
  
      res.status(201).json(allUsers);
    } catch (error) {
      console.error("Error in getUsersForSidebar:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  