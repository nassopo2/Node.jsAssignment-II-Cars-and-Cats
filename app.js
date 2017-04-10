// get the http module:
var http = require ("http");
// fs module allows us to read and write content for responses!
var fs = require ("fs");
// creating a server using the http module:
var server = http.createServer(function (request, response){
  // see what URL the clients are requesting:
  console.log ("client request URL:", request.url);
  /// Home Page: ////
  // this is how we do the routing:
  if (request.url === "/"){
    fs.readFile("./views/index.html", "utf8", function (errors, contents){
      response.writeHead(200,{"Content-Type": "text/htm"});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/cars"){

    fs.readFile("./views/cars.html", "utf8", function(errors, contents){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/cats"){

    fs.readFile("./views/cats.html", "utf8", function(errors, contents){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/cars/new"){
    fs.readFile("./views/new.html", "utf8", function(errors, contents){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/stylesheets/style.css"){
    fs.readFile("./stylesheets/style.css", "utf8", function(errors, contents){
      response.writeHead(200, {"Content-Type": "text/css"});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/images/cars.jpg"){
    fs.readFile("./images/cars.jpg", function(errors, contents){
      response.writeHead(200, {"Content-Type": "image/jpg"});
      response.write(contents);
      response.end();
  });
}
else if(request.url === "/images/cars2.jpg"){
  fs.readFile("./images/cars2.jpg", function(errors, contents){
    response.writeHead(200, {"Content-Type": "image/jpg"});
    response.write(contents);
    response.end();
  });
}
else if(request.url === "/images/cats.jpg"){
  fs.readFile("./images/cats.jpg", function(errors, contents){
    response.writeHead(200, {"Content-Type": "image/jpg"});
    response.write(contents);
    response.end();
  });
}
else if(request.url === "/images/cats2.jpg"){
  fs.readFile("./images/cats2.jpg", function(errors, contents){
    response.writeHead(200, {"Content-Type": "image/jpg"});
    response.write(contents);
    response.end();
  });
}

// request didnt match anything:
  else {
    response.end("File not found!");
  };
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log ("Running in localhost at port 7077");
