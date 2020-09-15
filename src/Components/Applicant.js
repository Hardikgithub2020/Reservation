import React, { Component } from "react";
import "../CSS/Applicant.css";
import { connect } from "react-redux";
import * as actions from "../actions/userActions";

class Applicant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_firstName: "",
            user_lastName: "",
            user_email: "",
            user_phoneNumber: "",
            user_password: "",
        };
    }

    handleSubmit = (event) => {
        this.props.dispatch({
            type: actions.GET_REGISTRATION_SUCCESS,
            payload: this.state,
        });
        event.preventDefault();
    };
    render() {
        const { userInfo } = this.props.userData;
        return (
            <div className="Applicant">
                <div className="applicant-form">
                    <h1>REGISTER HERE {userInfo.user_firstName}</h1>
                    <form class="needs-validation" onSubmit={this.handleSubmit} novalidate >
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="validationTooltip01">First name</label>
                                <input name="firstName" type="text" class="form-control" id="validationTooltip01" value={this.state.user_firstName}
                                    onChange={(e) => this.setState({ user_firstName: e.target.value })} required />
                                <div class="valid-tooltip">Looks good!</div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="validationTooltip02">Last name</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    class="form-control"
                                    id="validationTooltip02"
                                    value={this.state.user_lastName}
                                    onChange={(e) =>this.setState({ user_lastName: e.target.value })} required/>
                                <div class="valid-tooltip">Looks good!</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input
                                name="email"
                                type="email"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                value={this.state.user_email}
                                onChange={(e) => this.setState({ user_email: e.target.value })}
                            />
                        </div>
                        <div class="form-group">
                            <label for="validationTooltip10">Phone</label>
                            <input
                                type="text"
                                class="form-control"
                                id="validationTooltip10"
                                value={this.state.user_phoneNumber}
                                onChange={(e) =>
                                    this.setState({ user_phoneNumber: e.target.value })
                                }
                                required
                            />
                            <div class="invalid-tooltip">Please provide a valid number.</div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Password</label>
                            <input name="message" type="password" class="form-control" id="exampleFormControlTextarea1"
                                 value={this.state.user_password} onChange={(e) =>this.setState({ user_password: e.target.value })}/>
                        </div>
                        <button class="btn btn-primary" type="submit" color="red">Submit form</button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Applicant);
