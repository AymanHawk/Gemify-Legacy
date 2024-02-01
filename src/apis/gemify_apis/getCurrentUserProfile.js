import axios from "axios";
import { useEffect } from "react";

async function getCurrentUserProfile({token}){

    try {
        const response = await axios.get(
            'https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        console.log(response)
        return response
    } catch (error) {
        console.error('Error generating token:', error.response ? error.response.data : error.message, '*****');
      throw error;
    }
}

export default getCurrentUserProfile;