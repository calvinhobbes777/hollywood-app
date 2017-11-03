module.exports = db => {
  const type = db.type;
  const Actor = db.createModel("Actor", {
    name: type.string().required(),
    age: type.number().required(),
    gender: type
      .string()
      .enum(["male", "female", "it"])
      .required(),
    race: type
      .string()
      .enum(["white", "black", "brown", "yellow", "other"])
      .required(),
    topMovies: type.string().required(),
    picture: type.string().required()
  });
  return Actor;
};
