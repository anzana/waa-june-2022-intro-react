import React, { useState } from 'react'

export default function Login(props) {
    const initialState = { username: "", password: "", message: "" }
    const [loginState, setLoginState] = useState(initialState);

    const handleLogin = (event) => {
        event.preventDefault();
        if (loginState.username === "ansharma@miu.edu" && loginState.password === "12345") {
            setLoginState({ ...loginState, message: "Successfully logged in." })
        } else {
            setLoginState({ ...loginState, message: "Invalid username or password" })
        }
    }

    return (
        <div>
            <form>
                <h2>Login</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={(event) => {
                            setState({ ...loginState, username: event.target.value });
                        }}
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(event) => {
                            setState({ ...loginState, password: event.target.value });
                        }}
                    />
                </div>
                <button
                    type="submit"
                    onClick={(event) => handleLogin(event)}
                    className="btn btn-primary"
                >
                    Submit
                </button> {loginState.message}
            </form>
        </div>
    )
}