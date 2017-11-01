module.exports = db => {
  const type = db.type;
  const Movie = db.createModel("Movie", {
    title: type.string().required(),
    summary: type.string().required(),
    poster: type.string().required(),
    rating: type
      .string()
      .enum(["G", "PG", "PG13", "R", "NC-17", "NR"])
      .required(),
    rottenTomatoes: type
      .number()
      .min(0)
      .max(100)
      .required()
  });
  return Movie;
};
