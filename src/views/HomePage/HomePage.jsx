import { styled } from '@mui/system';
import { AppBar, Button, Card, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorStatus, selectLoadingStatus, selectUserProfile } from '../../redux/ducks/Users/ducks/GetCurrentUserProfile/getCurrentUser-Selectors';
import { getProfile } from '../../redux/ducks/Users/ducks/GetCurrentUserProfile/getCurrentUser-Actions';
import { useEffect } from 'react';
import { topItemsData, topItemsIsLoading } from '../../redux/ducks/Users/ducks/GetTopItems/getTopItems-Selectors';
import { getTopItems } from '../../redux/ducks/Users/ducks/GetTopItems/getTopItems-Actions';

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
        maxHeight: '50vh'
    }),

    Nav: styled(AppBar)({
        backgroundColor: 'black',
        padding: '0px',
        margin: '0px',
    })
};

function HomePage({ token }) {
    const dispatch = useDispatch();
    const errorMessage = useSelector(selectErrorStatus)
    const loadingStatus = useSelector(selectLoadingStatus)

    useEffect(() => {
        dispatch(getProfile(token))
        dispatch(getTopItems(token))
    }, [token, dispatch])
    const userProFileData = useSelector(selectUserProfile);
    const DISPLAY_NAME = userProFileData?.display_name

    const userTopItemsData = useSelector(topItemsData)
    const userTopItemsLoading = useSelector(topItemsIsLoading)
    const userTopItems = userTopItemsData?.items

    return (
        <StyledComponents.Container>
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
                Hey There {!loadingStatus && `${DISPLAY_NAME || ''}`}
            </StyledComponents.Card>
            Your top artists are:
            <br />
            {!userTopItemsLoading && userTopItemsData?.items && (
                <div>
                    <ul>
                        {userTopItemsData.items.map((item) => (
                            <li key={item.id}>
                                <img src={item.images[0].url} alt="" height="100px" />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}


        </StyledComponents.Container>
    )
}

export default HomePage;
