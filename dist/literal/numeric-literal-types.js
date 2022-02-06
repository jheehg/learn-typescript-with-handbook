function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var result = rollDice();
setupMap({ lng: -73.9, lat: 40.7, tileSize: 16 });
