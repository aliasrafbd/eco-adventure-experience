import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    
    const titles = {
      "/": "Home | Eco Adventures Experience",
      "/updateprofile": "Update Profile | Eco Adventures Experience",
      "/userprofile": "My Profile | Eco Adventures Experience",
      "/login": "Login | Eco Adventures Experience",
      "/register": "Register | Eco Adventures Experience",
    };

    document.title = titles[pathname] || "Eco Adventures Experience";
  }, [location]);
};

export default DynamicTitle;
