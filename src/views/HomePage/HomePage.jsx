import { styled } from '@mui/system';
import { Button, Container, } from '@mui/material';
import getCurrentUserProfile from '../../apis/gemify_apis/getCurrentUserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from '../../redux/ducks/Users/ducks/GetCurrentUserProfile/getCurrentUser-Selectors';
import { getProfile } from '../../redux/ducks/Users/ducks/GetCurrentUserProfile/getCurrentUser-Actions';
import { useEffect } from 'react';



const StyledComponents = {
    Button: styled(Button)({
    }),
  
    Container: styled(Container)({
    }),
  };

function HomePage({token}){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile(token))
    }, [])

    const data = useSelector(selectUserProfile);
    const DISPLAY_NAME = data?.display_name
    // console.log('it worked ???',data)


    return(
        <div>
            {console.log('it worked ???',data)}
            <Container>
                Hey There {`${DISPLAY_NAME}`}
                {/* <Button onClick={() => dispatch(getProfile(token))}> LOG</Button> */}
            </Container>
        </div>
    )
}

export default HomePage;