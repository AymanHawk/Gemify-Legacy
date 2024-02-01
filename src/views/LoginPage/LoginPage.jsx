import { Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import spotify_logo from 'assets/spotify-logo.svg'
import './LoginPage.css'

const StyledComponents = {
  Button: styled(Button)({
    backgroundColor: '#2DBC58',
    zIndex: 1, // Ensure the button stays above the circles
  }),

  Container: styled(Container)({
    position: 'relative',
    height: '100vh',
    width: '100vw',
    backgroundColor:'#dbe5e3',
    backgroundImage: `
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='58' viewBox='0 0 42 58'%3E%3Cg fill='%232ea88f' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M12 18h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34 2H2v8h24v24h8V2zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/g%3E%3C/svg%3E")
  `,

  }),

  LeftContainer: styled(Container)({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  Img: styled('img')({
    width: '350px',
    marginBottom: '2rem',
  }),
};


function LoginPage({}) {
  
  const handleClick = () => {
      const CLIENT_ID = "d1ca8443abd34bbe8d5b33168e16ed54"
      const REDIRECT_URI = "http://localhost:3000" // http://localhost:3000
      const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
      const SCOPE = [
          'user-read-playback-position',
          'user-top-read',
          'user-read-recently-played',
          'playlist-read-private',
          'playlist-read-collaborative',
          'playlist-modify-private',
          'playlist-modify-public',
          'user-library-modify',
          'user-library-read'
      ]
      const RESPONSE_TYPE = "token"
  
      window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE.join(' ')}&response_type=${RESPONSE_TYPE}&show_dialog=true`
  }

  return (
    <StyledComponents.Container>
      <StyledComponents.LeftContainer>
        <StyledComponents.Img src={spotify_logo} alt="" />
        <StyledComponents.Button variant='contained' onClick={handleClick}>
          Connect Spotify
        </StyledComponents.Button>
      </StyledComponents.LeftContainer>
    </StyledComponents.Container>
  );
}


export default LoginPage;
