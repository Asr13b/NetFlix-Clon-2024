const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchAnimationNature: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16&sort_by=popularity.desc`,

  fetchNatureDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99&sort_by=popularity.desc`,

  fetchTrending: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16,99&sort_by=popularity.desc`,

  fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16,99&sort_by=vote_average.desc&vote_count.gte=50`,

  fetchKidsAnimation: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16&certification_country=US&certification.lte=PG&sort_by=popularity.desc`,

  fetchEducationalForKids: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16,99&certification_country=US&certification.lte=PG&sort_by=vote_average.desc`,
};

export default requests;
