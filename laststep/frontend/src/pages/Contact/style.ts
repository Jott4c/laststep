import styled from "styled-components";

export const Body = styled.div`
	width: 100vw;
	height: 100vh;

	overflow-x: hidden;

	background: linear-gradient(90deg, #dbfbfb 0%, rgba(253, 239, 206, 0) 100%);
`;

export const Header = styled.div`
	display: flex;
	justify-content: center;

	background-color: white;

	width: 100vw;
	height: 100px;

	/* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 80vw;
	}

	img {
		width: 180px;
		height: 42px;
	}

	ul {
		display: flex;
		flex-direction: row;

		@media (min-width: 320px) {
			display: none;
		}

		@media (min-width: 1024px) {
			display: flex;
		}
	}

	li {
		margin: 90px;
	}

	.link {
		font-style: normal;
		font-weight: 700;
		font-size: 13px;
		line-height: 18px;

		display: flex;
		align-items: center;
		letter-spacing: -0.025em;
		text-decoration: none;

		color: #4984e8;

		cursor: pointer;
	}

	.enter-btn {
		width: 180px;
		height: 40px;
		left: 1139px;
		top: 30px;

		background: #4984e8;

		border-radius: 4px;
		border: none;

		font-style: normal;
		font-weight: 700;
		font-size: 13px;
		line-height: 18px;

		text-decoration: none;

		color: #ffffff;

		cursor: pointer;

		@media (min-width: 320px) {
			display: none;
		}

		@media (min-width: 1024px) {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.mobile-nav {
		@media (min-width: 320px) {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 30px;
			height: 30px;

			background: #4984e8;
			color: white;

			border: none;
			border-radius: 4px;

			font-size: 20px;
		}

		@media (min-width: 1024px) {
			display: none;
		}
	}
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-x: hidden;

	width: 100vw;

	@media (min-width: 1024px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 150px;
	}
`;

export const Dev = styled.div`
	display: flex;
	justify-content: center;
	position: relative;

	width: 220px;
	height: 350px;

	margin: 5px;

	@media (min-width: 768px) {
		width: 350px;
		height: 430px;
		margin: 10px;
	}

	@media (min-width: 1024px) {
		margin: 35px;
	}

	figure {
		display: flex;
		align-items: center;
		position: absolute;

		top: 0px;

		height: 200px;

		@media (min-width: 768px) {
			top: 50px;
		}

		@media (min-width: 1024px) {
			top: 0px;
		}

		@media (min-width: 1440px) {
			top: 25px;
		}
	}

	img {
		width: 150px;
		border-radius: 5px;

		@media (min-width: 768px) {
			width: 250px;
		}

		@media (min-width: 1024px) {
			width: 150px;
		}

		@media (min-width: 1440px) {
			width: 220px;
		}
	}

	.dev-name {
		display: flex;
		align-items: center;
		position: absolute;
		top: 190px;

		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 19px;

		color: #4984e8;

		@media (min-width: 768px) {
			top: 300px;
		}

		@media (min-width: 1024px) {
			top: 200px;
			font-size: 14px;
		}

		@media (min-width: 1440px) {
			top: 260px;
			font-size: 16px;
		}
	}

	.dev-bio {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		position: absolute;
		top: 210px;

		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;

		color: #000000;

		@media (min-width: 768px) {
			top: 320px;
		}

		@media (min-width: 1024px) {
			top: 220px;
			font-size: 13px;
		}

		@media (min-width: 1440px) {
			top: 290px;
			font-size: 15px;
		}
	}

	.linkedin {
		position: absolute;
		bottom: 10px;
		color: #4984e8;
	}

	@media (min-width: 1440px) {
	}
`;

export const Footer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 35px;

	background: #4984e8;

	font-style: normal;
	font-weight: 700;
	line-height: 18px;

	display: flex;
	align-items: center;
	letter-spacing: -0.025em;

	color: #ffffff;

	@media (min-width: 320px) {
		font-size: 8px;
	}

	@media (min-width: 768px) {
		font-size: 12px;
	}
`;
