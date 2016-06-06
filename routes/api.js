"use strict";

const router = require("express").Router();
const request = require("request");

function generateUrl(options){
  const today = new Date().toISOString();
  const todayNum = Date.now();
  const threeWeekNum = 1000*60*60*24*7*3; // miliseconds x seconds x minutes x hours x days x weeks
  const threeWeeksAgo = new Date(todayNum - threeWeekNum).toISOString();
  let fieldQuery = "fields="
  for (let field of options.fields){
    fieldQuery += field.key + ","
  }
  fieldQuery +="postal_code";
  return `https://api.weathersource.com/v1/${process.env.API_KEY}/history_by_postal_code.json?limit=25&country_eq=US&postal_code_eq=${options.zip}&timestamp_between=${threeWeeksAgo},${today}&${fieldQuery}`
}

router.post("/", (req, res)=>{
  const url = generateUrl(req.body)
  request(url, (err, response, body)=>{
    body = JSON.parse(body);
    if (err || body.response_code === "400") res.status(400).send("No Data Found");
    else res.send(body);
  })
})


module.exports = router;
