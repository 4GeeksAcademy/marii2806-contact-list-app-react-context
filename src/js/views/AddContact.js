import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
    const [name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const {actions} = useContext(Context);

    
    const handleCreateContact =e=> {
        e.preventDefault();

        const data = {
            full_name: name,
            email: email,
            phone: phone,
            address: address,
            agenda_slug: "marii2806"
        };

        actions.createContact(data);

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
    };

    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add a new contact</h1>
                <form onSubmit={handleCreateContact}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={name}
                            className="form-control"
                            placeholder="Full Name"
                            onChange={e => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            className="form-control"
                            placeholder="Enter Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="phone"
                            value={phone}
                            className="form-control"
                            placeholder="Enter Phone"
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            value={address}
                            className="form-control"
                            placeholder="Enter Address"
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary form-control" type="submit">Save</button>
                    <Link className="text-center mt-3 w-100" to="/">or get back to contacts</Link>
                </form>
            </div>
        </div>
    );
};