import dotenv from 'dotenv';
import getstream from 'getstream';

dotenv.config();

exports.follow = async (req, res) => {
    try {
        const data = req.body;

        let apiKey = 'zsafujysu93n';

        const { userToken, userToFollow, user } = data

        // Instantiate a new client (server side)
        let client = getstream.connect(
            apiKey,
            userToken,
            '65036'
        );
        
        let myuser = client.feed('timeline', user);
        myuser.follow('user', userToFollow)
        
        res.status(200).json({ 'response': true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
