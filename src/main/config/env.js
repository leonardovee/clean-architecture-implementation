module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://leonardovee:yGGxSd51Eg3Owu5p@cluster0.5umt5.mongodb.net/clean-architecture-implementation?retryWrites=true&w=majority',
  tokenSecret: process.env.TOKEN_SECRET || 'secret',
  port: process.env.PORT || 5050
}
