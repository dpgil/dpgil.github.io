var ghpages = require("gh-pages");

ghpages.publish(
  ".",
  {
    branch: "master",
    repo: "https://github.com/dpgil/dpgil.github.io.git"
  },
  function(err) {
    if (err) {
      console.log("error deploying " + err);
    } else {
      console.log("successfully deployed");
    }
  }
);
