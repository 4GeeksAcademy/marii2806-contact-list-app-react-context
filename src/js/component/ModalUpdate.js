import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ModalUpdate = props => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);
	const handleUpdate = () => {
		const data = {
			name: name,
			email: email,
			agenda_slug: "velazcoCarlos",
			phone: phone,
			address: address
		};
		actions.updateOneContact(props.id, data);
	};

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						{/* <form> */}
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								value={props.name}
								className="form-control"
								placeholder="Full Name"
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								value={props.email}
								className="form-control"
								placeholder="Enter email"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								type="phone"
								value={props.phone}
								className="form-control"
								placeholder="Enter phone"
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								value={props.address}
								className="form-control"
								placeholder="Enter address"
								onChange={e => setAddress(e.target.value)}
							/>
						</div>
						{/* </form> */}
					</div>
					<div className="modal-footer">
						<button
							onClick={() => {
								props.onClose();
							}}
							type="button"
							className="btn btn-primary">
							Oh no!
						</button>
						<button
							onClick={() => {
								handleUpdate();
								props.onClose();
							}}
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal">
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalUpdate.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number,
	name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalUpdate.defaultProps = {
	show: false,
	onClose: null
};