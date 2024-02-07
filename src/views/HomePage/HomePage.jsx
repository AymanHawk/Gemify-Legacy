import { styled } from '@mui/system';
import { AppBar, Button, Card, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorStatus, selectLoadingStatus, selectUserProfile } from '../../redux/ducks/Users/ducks/GetCurrentUserProfile/getCurrentUser-Selectors';
import { getProfile } from '../../redux/ducks/Users/ducks/GetCurrentUserProfile/getCurrentUser-Actions';
import { useEffect } from 'react';

const StyledComponents = {
    Button: styled(Button)({
    }),

    Container: styled('div')({
        minHeight: '100vh', // Set the minimum height to 100% of the viewport height
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Center content vertically
        backgroundColor: 'green',
    }),

    Card: styled(Card)({
        padding: '10px',
        backgroundColor: 'purple',
        flex: '1',
        alignSelf: 'flex-start', // Align to the end of the cross-axis (top in a column layout)
    }),

    Nav: styled(AppBar)({
        backgroundColor: 'black',
        padding: '0px',
        margin: '0px',
    })
};

function HomePage({ token }) {
    const dispatch = useDispatch();
    const errorStatus = useSelector(selectErrorStatus)
    const loadingStatus = useSelector(selectLoadingStatus)

    useEffect(() => {
        dispatch(getProfile(token))
    }, [token, dispatch])

    const data = useSelector(selectUserProfile);
    const DISPLAY_NAME = data?.display_name

    return (
        <StyledComponents.Container>
            {console.log()}
            <StyledComponents.Nav position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Menu Bar
                    </Typography>
                </Toolbar>
            </StyledComponents.Nav>
            <StyledComponents.Card>
                {/* add profile image here */}
                Hey There {!errorStatus && `${DISPLAY_NAME || ''}`}
            </StyledComponents.Card>
            hello
        </StyledComponents.Container>
    )
}

export default HomePage;
