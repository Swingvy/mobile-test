const accessToken =
  "pk.eyJ1IjoiaWFtYXBhcms4OSIsImEiOiJjanlpZmF5c3AwOXJzM2NxaDQzNWhiaDRmIn0.C-e2EpmyDtsqPbu9FjJz5Q";

export const getMapData = ({ latitude, longtitude }) => {
  const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude},${longtitude}.json?access_token=${accessToken}`;

  return fetch(mapUrl).then(response => {
    return response.json();
  });
};
