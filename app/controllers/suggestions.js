"use strict";

const Suggestion = {
  home: {
    handler: function (request, h) {
      return h.view("home", { title: "Make a Suggestion!" });
    },
  },
  report: {
    handler: function (request, h) {
      return h.view("report", {
        title: "Suggestions to Date",
        suggestions: this.suggestions,
      });
    },
  },
  suggestions: {
    handler: function (request, h) {
      const data = request.payload;
      var donorEmail = request.auth.credentials.id;
      data.donor = this.users[donorEmail];
      this.suggestions.push(data);
      return h.redirect("/report");
    },
  },
};

module.exports = Suggestion;
