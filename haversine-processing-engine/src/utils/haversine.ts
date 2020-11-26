
// TODO: Move to ES6+
const deg2rad = function(num: number) {
	return num * Math.PI / 180;
}

const distance = function(location1: number[], location2: number[], useMiles: boolean = false) { // lon lat
	var coreRadius: number = 6371; // km
	var dLat: number = deg2rad(location2[0] - location1[0]);
	var dLon: number = deg2rad(location2[1] - location1[1]);
	var a: number = Math.sin(dLat / 2) * 
									Math.sin(dLat / 2) + 
									Math.cos(deg2rad(location1[0])) * 
									Math.cos(deg2rad(location2[0])) * 
									Math.sin(dLon / 2) * 
									Math.sin(dLon / 2);
	var c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d: number = Math.round(coreRadius * c);
	if (useMiles) {	// returns miles instead of kilometers
		d = Math.round(d * 0.621371192);
	}
	return d;
}

const passFail  = function(firstLocation: number[], secondLocation: number[], firstTransaction: number, secondTransaction: number, maxSpeed: number): boolean {
var elapsedTime: number = (secondTransaction - firstTransaction) / (1000);	// convert to seconds
var transactionDistance: number = distance(firstLocation, secondLocation, false);
var speed: number = transactionDistance / elapsedTime;
if (speed > maxSpeed) {
        return false;
}
return true;
}

export default passFail;
