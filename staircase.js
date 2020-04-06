// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer


function staircase(n) {
    var height = n;
  
    for (var i=0 ; i < height; i++) {
      var row= "";
  
      for (var j=0 ; j < height; j++) {
        if (i + j > height - 2 ) {
          row += "#";
        } else {
          row += " ";
        }
      }
      console.log(row);
    }
  }

  staircase(6)