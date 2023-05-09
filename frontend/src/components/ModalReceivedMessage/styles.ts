import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	z-index: 99;
	min-height: 100vh;
	background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 500px;
	width: 770px;
	position: relative;
	background-color: white;
	border-radius: 8px;
	.card-modal-header {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 770px;
		height: 50px;

		border-radius: 8px 8px 0 0;
		background-color: var(--color-primary);
		color: white;

		.close-btn {
			position: absolute;
			top: 3px;
			right: 3px;
			background-color: transparent;
			border: none;
			color: white;
		}
	}
	.body-msg {
		width: 95%;
		height: 400px;
		border-radius: 4px;
		background-color: var(--grey-1);
		padding: 10px;
		margin-top: 10px;
		overflow-y: auto;

		ul {
			li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 98%;
				height: 40px;
				border-radius: 4px;
				background-color: var(--grey-0);
				gap: 10px;
				margin: 10px;
				padding: 5px;

				div {
					display: flex;
					p {
						margin: 0 10px;
						color: var(--color-primary);
						font-weight: 700;
					}
					.btn-name {
						font-size: 16px;
					}

					.btn-msg {
						max-width: 300px;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
					}
				}
				button {
					background: transparent;
					border: none;
				}
			}
		}
	}
`;
