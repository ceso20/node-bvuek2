const express = require('express');
const app = express();

app.get("/", (req,res) => {
  res.send("<h1>Mustafa</h1>")
})




app.listen(1234, () => {
  console.log('started...');
});
