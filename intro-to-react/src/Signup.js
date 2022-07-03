import React, {useState} from 'react'

export default function Signup(props) {
    const initialState = {firstName:"",middleName:"",lastName:"", email:"",password:""}
    const [signupState, setSignupState] = useState(initialState)

    const handleSignup = (event) => {
        event.preventDefault();
    }

    return(
        <div className="row mt-2">
        <div className="col-lg-6 mx-auto">
          <h3 className="my-2"> Registration</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                onChange={(event) => {
                  setSignupState({ ...signupState, firstName: event.target.value });
                }}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="middleName" className="form-label">
                Middle Name
              </label>
              <input
                type="text"
                className="form-control"
                id="middleName"
                onChange={(event) => {
                  setSignupState({ ...signupState, middleName: event.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="lastName"
                className="form-control"
                id="lastName"
                onChange={(event) => {
                  setSignupState({ ...signupState, lastName: event.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(event) => {
                  setSignupState({ ...signupState, email: event.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(event) => {
                  setSignupState({ ...signupState, password: event.target.value });
                }}
              />
            </div>
            <button
              type="submit"
              onClick={(event) => handleSignup(event)}
              className="btn btn-primary"
            >
              Register
            </button> {signupState.message}
          </form>
        </div>
      </div>
    )
}