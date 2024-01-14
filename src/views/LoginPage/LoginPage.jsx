import { Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import spotify_logo from 'assets/spotify-logo.svg'

const StyledComponents = {

  Button: styled(Button)({
    backgroundColor: '#1DB954',
  }),

  Container: styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#EAEDF0',
    gap: '5rem',
    // borderRadius:'10px',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  }),

  Img: styled('img')({
    maxWidth: '100%', 
    maxHeight: '100%', 
  }),

};

const handleClick = () => {
    const CLIENT_ID = "d1ca8443abd34bbe8d5b33168e16ed54"
    const REDIRECT_URI = "http://localhost:3000"
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

function LoginPage() {
  return (
    <StyledComponents.Container>
        <StyledComponents.Img src={spotify_logo} alt="" />
      <StyledComponents.Button variant='contained' onClick={handleClick} >Connect Spotify</StyledComponents.Button>
    </StyledComponents.Container>
  );
}

export default LoginPage;