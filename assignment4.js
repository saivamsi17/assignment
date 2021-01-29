let ratingData = [
    { restaurant: "KFC", rating: 5 },
    { restaurant: "Burger King", rating: 4 },
    { restaurant: "KFC", rating: 3 },
    { restaurant: "Domino", rating: 2 },
    { restaurant: "Subway", rating: 3 },
    { restaurant: "Domino", rating: 1 },
    { restaurant: "Subway", rating: 4 },
    { restaurant: "Pizza Hut", rating: 5 },
  ];
  
  //Part a : Calculate the Average rating for all the restaurants.
  
  let avgRating = [];
  let ratings = [];
  let flag = [];
  
  for (let i = 0; i < ratingData.length; i++) {
    for (let j = i; j < ratingData.length; j++) {
      if (
        ratingData[i].restaurant === ratingData[j].restaurant &&
        flag[j] !== true
      ) {
        ratings.push(ratingData[j].rating);
        flag[j] = true;
      }
    }
    if (ratings.length !== 0) {
      avgRating.push({
        restaurant: ratingData[i].restaurant,
        avgRating:
          ratings.reduce((acc, item) => {
            return acc + item;
          }, 0) / ratings.length,
      });
    }
    ratings = [];
  }
  
  console.log(avgRating);
  
  //Part B: List of all restuarants with average rating greater than 4.
  
  avgRating = avgRating.filter((item) => item.avgRating > 4);
  console.log(avgRating);