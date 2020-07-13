// exercise 11 Let's use our new reduce function to isolate the largest value in an array of ratings
function exercise11() {
  const ratings = [2, 3, 1, 4, 5];
  return ratings.reduce((largestNum, rating) => {
    // eslint-disable-next-line no-param-reassign
    if (largestNum < rating) largestNum = rating;
    return largestNum;
  }, []);
}

console.log(exercise11());
