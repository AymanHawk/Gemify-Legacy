import { link } from "../apis/getAuthorize"

function Login({}){
    return(
        <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Login to Spotify
      </a>
    )
}

export default Login