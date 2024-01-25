import pokeBall from "@/assets/R.png";
import home from "@/assets/home-button.png";
import back from "@/assets/backward.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-center items-center gap-16 p-5 bg-color-accent font-Poppins sticky top-0 shadow z-50">
      <img
        src={back}
        alt=""
        className="md:w-16 w-12 scale-100 hover:scale-105 transition-all"
        onClick={() => navigate(-1)}
      />
      <Link to="/">
        <img
          src={home}
          alt=""
          className="md:w-16 w-12 scale-100 hover:scale-105 transition-all"
        />
      </Link>
      <Link to="/my-pokemon">
        <img
          src={pokeBall}
          alt=""
          className="md:w-16 w-12 scale-100 hover:scale-105 transition-all"
        />
      </Link>
    </nav>
  );
}
