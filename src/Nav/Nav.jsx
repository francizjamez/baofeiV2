import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Cart from "./Cart";

const initialState = new Array(3).fill("");
initialState[0] = "active";

const Nav = () => {
  const [activeStates, setActiveStates] = useState(initialState);
  const [show, setShow] = useState(false);

  const cartStyle = show ? { color: "#49bb2b" } : {};

  function navigate(index) {
    let newStates = [...activeStates];
    newStates.fill("");
    newStates[index] = "active";
    setActiveStates(newStates);
  }

  function showCart() {
    setShow(!show);
  }
  return (
    <nav>
      <div className="links">
        <Link
          to="/#home"
          className={`link ${activeStates[0]}`}
          onClick={() => navigate(0)}
        >
          HOME
        </Link>
        <Link
          to="/#about"
          className={`link ${activeStates[1]}`}
          onClick={() => navigate(1)}
        >
          ABOUT
        </Link>
        <Link
          to="/#menu"
          className={`link ${activeStates[2]}`}
          onClick={() => navigate(2)}
        >
          MENU
        </Link>
      </div>

      <button className="cart-btn" onClick={showCart}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="2x"
          color="white"
          style={cartStyle}
          className="cart-icon"
        />
      </button>
      <Cart show={show} />
    </nav>
  );
};

export default Nav;
