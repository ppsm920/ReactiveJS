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

// exercise 12 : You should return an array containing only the URL of the largest box art.
function exercise12() {
  const boxarts = [
    { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg' },
    { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' },
    { width: 300, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' },
    { width: 425, height: 150, url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg' },
  ];
  let multiplyResult;
  const result = boxarts.map((boxart) => (boxart.width * boxart.height));
  boxarts.forEach((boxart) => {
    if (Math.max(...result) === boxart.width * boxart.height) {
      multiplyResult = boxart.url;
    }
  });
  return multiplyResult;
}

console.log(exercise12());
