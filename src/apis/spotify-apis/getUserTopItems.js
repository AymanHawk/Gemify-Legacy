import axios from "axios";

async function getUserTopItems({token, type, time_range, limit, offset }){
    try {
        const response = await axios.get(
            'https://api.spotify.com/v1/me/top/artists', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response
    } catch (error) {
        console.error('Error generating token:', error.response ? error.response.data : error.message, '*****');
      throw error;
    }
}

export default getUserTopItems;