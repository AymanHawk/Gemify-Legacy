import { Card } from "@mui/material";
import { styled } from '@mui/system';

const StyledComponents = {
    Card: styled(Card)({
        backgroundColor: '#1DB954',
        height:'100vh',
        width:'600px'

    }),
  };

function PurposeCard(){
    return(
        <StyledComponents.Card>
            Hey There 👋🏼
        </StyledComponents.Card>
    )
}

export default PurposeCard;