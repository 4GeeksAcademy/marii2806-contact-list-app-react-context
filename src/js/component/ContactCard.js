import React, {useState, useEffect, useContext} from "react";
// import {withRouter} from "react-router-dom";
import PropTypes from "prop-types"
import ProfilePhoto from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const ContactCard = props => {
    const {store, actions} = useContext(Context)
    const [state, setState] = useState({})
    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0"><img src={ProfilePhoto} alt="Mariia Bratukhina" className="rounded-circle mx-auto d-block img-fluid" />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <div className="float-right">
                        {/* <button className="btn" onClick={() => props.onUpdate()}><i className="fas fa-pencil-alt mr-3"/></button> */}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#staticBackdropEdit" + props.idx}>
                            <i className="fas fa-pencil-alt mr-3"/>
                        </button>
                        <div className="modal fade" id={"staticBackdropEdit" + props.idx} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={"staticBackdropEdit" + props.idx} aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {props.name}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* <button className="btn" onClick={() => props.onDelete()}><i className="fas fa-trash-alt"/></button> */}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#staticBackdropDelete" + props.idx}>
                            <i className="fas fa-trash-alt"/>
                        </button>

                        <div className="modal fade" id={"staticBackdropDelete" + props.idx} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Are you sure you want to delete?</h5>
                                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={() => actions.deleteContact(props.id)}>Yes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <label className="name">{props.name}</label>
                    <br/>
                    <i className="fas fa-map-marker-alt text-muted mr-3"/>
                    <span className="text-muted">{props.address}</span>
                    <br/>
                    <i className="fa fa-phone fa-fw text-muted mr-3"/>
                    <span className="text-muted small">{props.phone}</span>
                    <br/>
                    <i className="fa fa-envelope fa-fw text-muted mr-3"/>
                    <span className="text-muted small text-truncate">{props.email}</span>
                </div>
            </div>
        </li>
    );
};

ContactCard.propTypes ={
    name: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    history: PropTypes.object,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
};

ContactCard.defaultProps = {
    onDelete: null
};