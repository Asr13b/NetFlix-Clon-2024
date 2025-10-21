// src/requests.jsx
const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
fetchAnimationNature: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16&with_keywords=nature,wildlife,planet,animals&without_keywords=people,human,biography&sort_by=popularity.desc`,
  
  fetchNatureDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99&with_keywords=nature,wildlife,planet,animals&without_keywords=people,human,biography&sort_by=popularity.desc`,

  fetchTrending: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16,99&with_keywords=nature,wildlife,planet,animals&without_keywords=people,human,biography&sort_by=popularity.desc`,

  fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16,99&with_keywords=nature,wildlife,planet,animals&without_keywords=people,human,biography&sort_by=vote_average.desc`,
};

export default requests;
