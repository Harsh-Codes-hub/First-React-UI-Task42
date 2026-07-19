const links = ["About Me", "Portfolio", "Services", "Blog"];

const navLinks = links.map((link) =>
  React.createElement(
    "li",
    {
      key: link,
    },
    React.createElement("a", { href: "#" }, link),
  ),
);

function Navbar() {
  return React.createElement(
    "header",
    null,

    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "nav",
        {
          className: "navbar",
        },

        React.createElement(
          "div",
          {
            className: "navbar__logo",
          },
          "LOGO",
        ),

        React.createElement(
          "ul",
          {
            className: "navbar__links",
          },
          navLinks,
        ),

        React.createElement(
          "div",
          {
            className: "navbar__cta",
          },
          React.createElement(
            "button",
            null,
            "Book a Call",
            React.createElement("i", {
              className: "ri-arrow-right-up-long-line",
            }),
          ),
        ),
      ),
    ),
  );
}

export default Navbar;
