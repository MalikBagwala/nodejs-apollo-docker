import mongoose from "mongoose";

mongoose
  .connect("mongodb://mongo-database:27017/nodejs-apollo-docker", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(c => console.log("MONGO CONNECTED ##"))
  .catch(err => console.error(err));

export default mongoose;
