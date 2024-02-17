import { styled } from '@mui/system';
import { AppBar, Card, Container, IconButton, Slider, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingStatus, selectUserProfile } from '../../redux/ducks/Users/ducks/GetCurrentUserProfile/getCurrentUser-Selectors';
import { clearProfile, getProfile } from '../../redux/ducks/Users/ducks/GetCurrentUserProfile/getCurrentUser-Actions';
import { useEffect, useState } from 'react';
import { topItemsData, topItemsIsLoading } from '../../redux/ducks/Users/ducks/GetTopItems/getTopItems-Selectors';
import { clearTopItems, getTopItems } from '../../redux/ducks/Users/ducks/GetTopItems/getTopItems-Actions';
import { RangeSlider } from '../../components';
import UseSwitchesCustom from '../../components/CustomSwitch/SongArtistSwitch';
import SongArtistSwitch from '../../components/CustomSwitch/SongArtistSwitch';

const StyledComponents = {
    Container: styled('div')({
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'green',
    }),

    Card: styled(Card)({
        padding: '10px',
        backgroundColor: 'purple',
        flex: '1',
        // alignSelf: 'flex-start',
        // maxHeight: '50vh',
    }),

    Nav: styled(AppBar)({
        backgroundColor: 'black',
        padding: '0px',
        margin: '0px',
    }),

    TopBar: styled(Toolbar)({
        display: 'flex',
        padding: '0'
        // justifyContent: 'space-between',
    }),
};

function HomePage({ token }) {
    const [sliderValue, setSliderValue] = useState(0);
    const [timeRange, setTimeRange] = useState('short_term')
    const [artists, setArtists] = useState('artists')
    const [switchValue, setSwitchValue] = useState(false);
    const dispatch = useDispatch();
    const loadingStatus = useSelector(selectLoadingStatus);

    useEffect(() => {
        dispatch(getProfile(token));
        dispatch(getTopItems(token, 'artists', 'short_term'))

        const timeoutId = setTimeout(() => {
            dispatch(clearProfile());
            dispatch(clearTopItems())
        }, 3500000);

        return () => clearTimeout(timeoutId);
    }, [token, dispatch]);

    const TIME_RANGE = {
        SHORT: 'short_term',
        MEDIUM: 'medium_term',
        LONG: 'long_term',
    }

    const userProFileData = useSelector(selectUserProfile);
    const DISPLAY_NAME = userProFileData?.display_name;

    const userTopItemsData = useSelector(topItemsData);
    const userTopItemsLoading = useSelector(topItemsIsLoading);
    const userTopItems = userTopItemsData?.items;

    const handleSliderChange = (value) => {
        if (value !== sliderValue) {
            setSliderValue(value);
            if (value === 0)
                setTimeRange(TIME_RANGE.SHORT)
            else if (value === 50)
                setTimeRange(TIME_RANGE.MEDIUM)
            else if (value === 100)
                setTimeRange(TIME_RANGE.LONG);
        }
        dispatch(clearTopItems())
        dispatch(getTopItems(token, artists, timeRange))
    };

    const handleSwitchChange = (value) => {
        console.log(value);
      
        // Update the state and use the callback function to ensure that you get the latest state
        setSwitchValue((prevSwitchValue) => {
          if (value !== prevSwitchValue) {
            setArtists(value ? 'artists' : 'tracks');
          }
          return value;
        });
        console.log(artists)
        // Use the updated value of artists, as setSwitchValue is asynchronous
        dispatch(clearTopItems())
        dispatch(getTopItems(token, artists, timeRange));
      };
      


    return (
        <StyledComponents.Container>
            <StyledComponents.Nav position="static">
                <StyledComponents.TopBar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Gemify
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        Hey there {!loadingStatus && `${DISPLAY_NAME || ''}`}
                    </Typography>
                </StyledComponents.TopBar>
            </StyledComponents.Nav>
            <StyledComponents.Card>
                <div style={{
                    width: '50%'
                }}>
                    <RangeSlider
                        onChange={handleSliderChange}
                    />
                    <SongArtistSwitch
                        onChange={handleSwitchChange}
                        isLoading={userTopItemsLoading}
                    />
                </div>
                Your top artists are:
                {!userTopItemsLoading && userTopItemsData?.items && (
                    <div>
                        <ul>
                            {userTopItemsData.items.map((item) => (
                                <li key={item.id}>
                                    {/* <img src={item.images[0].url} alt="" height="100px" /> */}
                                    {item.name}
                                    <br />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </StyledComponents.Card>
        </StyledComponents.Container>
    );
}

export default HomePage;
