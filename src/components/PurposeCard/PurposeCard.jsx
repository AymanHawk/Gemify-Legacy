import { Card } from "@mui/material";
import { styled } from '@mui/system';

const StyledComponents = {
    Card: styled(Card)({
      backgroundColor: '#2DBC58',
      height: '100vh',
      width: '600px',
      padding: '3rem', // Adjust padding as needed
  
      // Media Query for Mobile
      '@media (max-width: 600px)': {
        width: '100%', // Takes up the full width on mobile
        padding: '3rem', // Adjust padding as needed for mobile
      },
    }),
  };
  
  function PurposeCard() {
    return (
      <StyledComponents.Card>
        Hey There 👋🏼
      </StyledComponents.Card>
    );
  }
  
  export default PurposeCard;
  