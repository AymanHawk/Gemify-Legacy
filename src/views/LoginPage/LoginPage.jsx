import { Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import spotify_logo from 'assets/spotify-logo.svg'
import './LoginPage.css'

const StyledComponents = {
  Button: styled(Button)({
    backgroundColor: '#2DBC58',
    zIndex: 1,
  }),

  PageContainer: styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',  // Adjusted to flex-start
    minHeight: '100vh',
    minWidth: '100vw'

  }),

  Img: styled('img')({
    width: '350px',
    marginBottom: '2rem',
  }),
};


function LoginPage() {

  const handleClick = () => {
    const CLIENT_ID = "enter client id here"
    const REDIRECT_URI = "enter rediret uri here" // http://localhost:3000 https://pre-production.d59h8svtpiyes.amplifyapp.com
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
    <>
      <StyledComponents.PageContainer>
        <StyledComponents.Img src={spotify_logo} alt="" />
        <StyledComponents.Button variant='contained' onClick={handleClick}>
          Connect To Spotify
        </StyledComponents.Button>
      </StyledComponents.PageContainer>
    </>
  );
}


export default LoginPage;
