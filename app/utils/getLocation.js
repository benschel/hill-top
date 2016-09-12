export default function getLocation(ready) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            ready(position.coords);
        },
        (error) => {
            console.log(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );
}
