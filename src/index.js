/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  count = 0;
  for(let i=0; i<=preferences.length; i++){ 
      let one = i+1; 
      let two = preferences[i]; 
      let three = preferences[two-1]; 
      if(two > preferences.length || three > preferences.length || one == two) {continue;}
      if(one == preferences[three-1]) {
        count++;  
        //preferences[one-1]=0; 
        //preferences[two-1]=0; 
        //preferences[three-1]=0;
      }
    }
  
  return Math.floor(count/3);
};
