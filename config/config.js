const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 4444,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  /*
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/thrush-auction',
    */
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb+srv://" +
      (process.env.IP || "mahdi") +
      ":" +
      (process.env.MONGO_PORT || "2LJCYAtphZ5CWYWg@cluster0.vquqn.mongodb.net") +
      "/thrush-auction",
  //mongoUri: "mongodb+srv://mahdi:2LJCYAtphZ5CWYWg@cluster0.vquqn.mongodb.net/thrush-auction?retryWrites=true&w=majority",
  //stripe_connect_test_client_id: "YOUR_stripe_connect_test_client",
  stripe_test_secret_key:
    "sk_test_51Ks9cpDX92TjlmMRpY6SCgY4EtgC8bqYVZUfIk9ViXto8jUN2HdMpMoVUtkeCSw2qj60FoTxAeFQRiLRX7OcGjGJ00YSuuymDs",
  stripe_test_api_key:
    "pk_test_51Ks9cpDX92TjlmMROnDl6PqYmhfS2bc20yjKEnmJptOT85jOnrVbq1pv0LY5jJbxh5cJrvM4SJU39VlnvAhlzakA000qXX1qNH",
};

export default config;
