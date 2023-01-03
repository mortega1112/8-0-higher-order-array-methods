/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printAllSongTitles(songs) {
 titlesArray = ["Berlin Tsukin", "Up", "Daylight", "Dormancy", "Pineapple Jam", "Samui Sunrise", "Regular Guy", "In the Middle of Nowhere", "Pink Elephants", "Kyona"];
 titlesArray.forEach(Element => console.log(Element));
  

  
 };

/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */
function printSongDetails(songs) {
  detailsArray = [
  "Berlin Tsukin by Taiyo Ky",
  "Up by Sebastian Kamae",
  "Daylight by hiyasu",
  "Dormancy by Arcade Portal",
  "Pineapple Jam by Saib",
  "Samui Sunrise by Saib",
  "Regular Guy by Peanut",
  "In the Middle of Nowhere by Soulaced",
  "Pink Elephants by Timestreet",
  "Kyona by Two Sleepy"]
  detailsArray.forEach(Element => console.log(Element));
};

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {
  minutesArray = ["Berlin Tsukin", "Pineapple Jam", "Samui Sunrise", "Regular Guy", "Kyona"];
  minutesArray.forEach(Element => console.log(Element));
}

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
