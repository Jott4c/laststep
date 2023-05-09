import { MenuMobile } from "./style";
import { HiMenu } from "react-icons/hi";
import ModalNav from "../ModalMobile";
import { useState } from "react";

const NavMenu = () => {
	const [openNav, setOpenNav] = useState(false);

	return (
		<>
			{openNav && <ModalNav />}
			<MenuMobile>
				<div className="logo-container">
					<img
						className="logo-mobile"
						src="./Logo.svg"
						alt="Logo LastStep"
					/>
				</div>
				<button
					onClick={() => setOpenNav(!openNav)}
					className="nav-btn"
				>
					<HiMenu size={20} />
				</button>
			</MenuMobile>
		</>
	);
};

export default NavMenu;
