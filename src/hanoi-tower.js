const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
 {
         if (n == 0)
         {
             return;
         }
         towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
         document.write("Move disk " + n + " from rod " + from_rod +
         " to rod " + to_rod+"<br/>");
         towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
     }
  
     var n = 4; 
     towerOfHanoi(n, 'A', 'C', 'B');

module.exports = {
  calculateHanoi
};
