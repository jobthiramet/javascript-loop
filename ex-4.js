// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
newRestaurants = restaurants.map(function(restaurant) {
    return "Restaurant Name: " + restaurant;
});

console.log(newRestaurants);
