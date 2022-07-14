import { useNavigate  } from "react-router-dom";

export function Header( {cartItems} ) {
  let navigate = useNavigate ();
//   let History = useHistory();

  return (
    <>
      <nav className="navbar navbar-dark site-bg-primary">
        <div className="d-flex w-100">
          <div className="text-light text-center h3 w-100">
            <div
              onClick={() => navigate.push("/")}
              className={"site-title pointer"}
            >
              Food Ordering Portal
            </div>
          </div>
          <div className="text-light d-flex align-items-center pointer">
            <div onClick={() => navigate.push("/cart")}>
              <i className="material-icons cart-icon">shopping_cart</i>
            </div>
            <div className="d-flex align-items-center">
              <span className="ml-2 cart-text">{cartItems.length}</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// useHistory is not working.
