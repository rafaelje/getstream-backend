import dotenv from 'dotenv';
import md5 from 'md5';
import { StreamChat } from 'stream-chat';
import getstream from 'getstream';

dotenv.config();

exports.channel = async (req, res) => {
    try {
        const data = req.body;

        let apiKey;
        let apiSecret;

        if (process.env.STREAM_URL) {
            [apiKey, apiSecret] = process.env.STREAM_URL.substr(8)
                .split('@')[0]
                .split(':');
        } else {
            apiKey = process.env.STREAM_API_KEY;
            apiSecret = process.env.STREAM_API_SECRET;
        }
        
        // Instantiate a new client (server side)
        let client = getstream.connect(
            apiKey,
            apiSecret,
        );
        
        const userToken = client.createUserToken(data.username);
        

        res.status(200).json({ apiKey, userToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
