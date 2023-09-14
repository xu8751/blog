const express = require("express");
const bodyParser = require("body-parser");
// *** 添加 ***
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const apicache = require("apicache");
const app = express();
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;
app.use(cache("2 minutes"));
app.use(bodyParser.json());
// *** 添加 ***
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});