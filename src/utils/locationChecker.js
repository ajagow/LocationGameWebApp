// export const isLocationMatch = (lat1, lon1, lat2, lon2) => {
//     var unit = 'M';

//    	if ((lat1 === lat2) && (lon1 === lon2)) {
// 		return 0;
// 	}
// 	else {
// 		var radlat1 = Math.PI * lat1/180;
// 		var radlat2 = Math.PI * lat2/180;
// 		var theta = lon1-lon2;
// 		var radtheta = Math.PI * theta/180;
// 		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
// 		if (dist > 1) {
// 			dist = 1;
// 		}
// 		dist = Math.acos(dist);
// 		dist = dist * 180/Math.PI;
// 		dist = dist * 60 * 1.1515;
// 		if (unit=="K") { dist = dist * 1.609344 }
// 		if (unit=="N") { dist = dist * 0.8684 }
// 	}

//    return .00189393939 - dist >= 0;
// };

const answers = {
  1: ["carletoncourtdogpark", "dogpark", "carletondogbark", "courtdogpark"],
  2: [
    "massachusettsavetstop",
    "massave",
    "massachusettsave",
    "massachusettsavet",
  ],
  3: ["fivehorsestavern", "tavern", "fivehorses"],
  4: ["7-eleven", "7/11", "seveneleven", "seven-eleven", "seven-eleven"],
  5: ["harriettubman", "harriettubmansquare", "harriettubmanmonument"],
  6: [
    "underarmourbrandhouse",
    "underarmour",
    "underarmourbust",
    "underarmourstore",
  ],
  7: ["braddock", "braddockpark"],
};

export const isLocationMatch = (id, guess) => {
  var cleanedGuess = guess.replace(/\s+/g, "");
  cleanedGuess = cleanedGuess.toLowerCase();

  return answers[id].includes(cleanedGuess);
};
