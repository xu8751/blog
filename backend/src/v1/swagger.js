const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// API的基础信息
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Crossfit WOD API", version: "1.0.0" },
  },
  apis: ["./src/v1/routes/workoutRoutes.js", "./src/database/Workout.js"],
};

// 使用 JSON 格式的文档
const swaggerSpec = swaggerJSDoc(options);

// 设置文档的函数
const swaggerDocs = (app, port) => {
  // 处理文档路由
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // 使得允许使用 JSON 格式文档
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://192.3.105.197:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };