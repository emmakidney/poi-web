const POI = {
  index: {
    handler: function (request, h) {
      return h.view("main", { title: "Welcome to Irelands POIs" });
    },
  },
  signup: {
    handler: function (request, h) {
      return h.view("signup", { title: "Sign up!" });
    },
  },
  login: {
    handler: function (request, h) {
      return h.view("login", { title: "Login!" });
    },
  },
};

module.exports = POI;
