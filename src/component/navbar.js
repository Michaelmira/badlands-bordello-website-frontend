import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} =useContext(Context);
	return (
		<nav className="navbar navbar-light" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} >
			<div className="container">
				<Link to="/" style={{ textDecoration: 'none' }} >
					<h1 className="navbar-brand mb-0 text-light" ><strong>Badlands Bordello</strong></h1>
				</Link>
				<div className="ml-auto text-light ">
					<Link to="/donate">
						<button className="btn bg-light btn-md border shadow btn-md-md px-2 mx-2 " >Donate</button>
					</Link>
					{store.token ? (
                        <button onClick={(e) => actions.logUserOut()} >
                            Log out
                        </button>
                    ) : (
                        <Link to="/log-in">
                            <button className="btn bg-light btn-md border shadow btn-md-md px-2 mx-2 "  >Log in</button>
                        </Link>
                    )}
				</div>
			</div>
		</nav>
	);
};
