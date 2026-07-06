import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "@/components/navigation";
import { ROUTES } from "@/config/navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="text-8xl font-bold text-[#FFB000]">404</h1>
        <p className="text-xl text-[#A3A3A3]">Oops! Page not found</p>
        <NavLink
          to={ROUTES.home}
          className="mt-4 px-8 py-3 rounded-full bg-[#FFB000] text-[#0D0D0D] font-semibold hover:bg-[#E69E00] transition-colors"
        >
          Return to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
