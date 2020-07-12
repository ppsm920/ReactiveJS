const movieLists = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 4.0,
    bookmark: [],
  },
  {
    id: 654356453,
    title: 'Bad Boys',
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 4.0,
    bookmark: [],
  },
  {
    id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0
function exercise8() {
  return movieLists
    .filter((video) => (video.rating === 5.0))
    .map((video) => video.id);
}

console.log(exercise8(movieLists));

// Exercise 9: Flatten the movieLists array into an array of video ids
function exercise9() {
  const allVideoIdsInMovieLists = [];
  movieLists.forEach((movieList) => {
    movieList.videos.forEach((video) => { allVideoIdsInMovieLists.push(video.id); });
  });
  return allVideoIdsInMovieLists;
}

console.log(exercise9(movieLists));
