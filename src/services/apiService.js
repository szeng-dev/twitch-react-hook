export const baseURL = 'https://api.twitch.tv/kraken';
const channelEndpoint = `${baseURL}/channels`;
const streamEndpoint = `${baseURL}/streams`;
const CLIENT_ID = '1isf395xqu08c2keqqu8gstk0ic7p9';
const withCredential = {
  headers: { 'Client-ID': CLIENT_ID }
};
export const channels = ["OgamingSC2", "brunofin", "ESL_SC2", "freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "comster404", "test_channel", "cretetion", "sheevergaming", "TR7K"];
export const channelDataTransformer = (data) => {
  const { display_name, url, status } = data;
  return {
    name: display_name,
    isLive: false,
    url,
    description: status,
  }
};
export const fetchChannelPromise = (channelName) => {
  return fetch(`${channelEndpoint}/${channelName}`, { ...withCredential })
    .then(res => res.json())
    .then(data => channelDataTransformer(data))
    .catch(err => new Error('Opps, something went wrong'));
}
export const fetchAllChannelsPromise = Promise.all(channels.map(channel => fetchChannelPromise(channel)));