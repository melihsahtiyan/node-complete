exports.appsettings = (database) => {
  return {
    connectionString: `mongodb+srv://melihsahtiyan:g15dpn0iy3TzvMQN@cluster0.dq6jv1q.mongodb.net/${database}?retryWrites=true&w=majority`,
    secretKey: "mysupersupersecretkey",
  };
};
