const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb+srv://kevin:kevinpatel123@cluster0.4dnou.mongodb.net/classroom?retryWrites=true&w=majority"
}

export default config
