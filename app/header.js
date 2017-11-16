exports.header = function(req) {
  var ip = req.header("X-Forwarded-For").split(',')[0];
  var lang = req.acceptsLanguages()[0];
  var soft = req.header("user-agent");
  var soft = soft.slice(soft.indexOf("(")+1, soft.indexOf(")"));
  
  return {"ipaddress":ip,"language":lang,"software":soft}
}
