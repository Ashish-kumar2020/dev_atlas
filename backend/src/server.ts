import app from "./app.js";
import "./config/db.js"
const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => {
  console.log(`DevAtlas is up and running on PORT_NUMBER : ${PORT_NUMBER}`);
});
