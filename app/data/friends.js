// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendsArray = [
  {
    "name": "Bart Simpson",
    "photo": "/../images/bartSimpson.png",
    "scores": [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1  
      ]

   
  }

  {
    "name": "Homer Simpson",
    "photo": "/../images/homerSimpson.png",
    "scores": [
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2  
      ]

   
  }

  {
    "name": "Selma and Patty Bouvier",
    "photo": "/../images/margeSisters.png",
    "scores": [
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3  
      ]

   
  }

    {
    "name": "Millhouse",
    "photo": "/../images/millhouse.jpg",
    "scores": [
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4  
      ]

   
  }

  {
    "name": "Skinner",
    "photo": "/../images/skinner.png",
    "scores": [
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5  
      ]

   
  }

];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;