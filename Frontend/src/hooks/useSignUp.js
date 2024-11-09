import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputValidation({ fullname, username, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, username, password, confirmPassword, gender }),
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      
      // If signup is successful, update the context and local storage
      localStorage.setItem("authUser", JSON.stringify(data));
      setAuthUser(data);
      
      toast.success("Signup successful!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputValidation = ({ fullname, username, password, confirmPassword, gender }) => {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
      toast.error("Please enter all required fields");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return false;
    }
    return true;
  };

  return { loading, signUp };
};

export default useSignUp;