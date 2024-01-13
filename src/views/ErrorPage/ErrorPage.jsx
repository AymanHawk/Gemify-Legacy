import { Link } from "react-router-dom"

import './ErrorPage.css'

function ErrorPage(){
    return(
        <div className="error-container">
            <h1>You're not suppose to be here!</h1>
            <br />
            <p>
                Click <Link to="/"> here </Link> to go back home
            </p>
        </div>
    )
}

export default ErrorPage