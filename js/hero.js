function Hero() {
  return React.createElement(
    "section",
    {
      className: "hero",
    },
    React.createElement(
      "div",
      {
        className: "container",
      },
      React.createElement(
        "div",
        {
          className: "hero__sidebar",
        },
        React.createElement("span", null, "Product Designer"),
        React.createElement("div", {
          className: "hero__line",
        }),
        React.createElement("span", null, "2024"),
      ),
      React.createElement(
        "div",
        {
          className: "hero__content",
        },
        React.createElement(
          "div",
          {
            className: "hero__stats",
          },
          React.createElement(
            "div",
            {
              className: "hero__stat",
            },
            React.createElement(
              "h4",
              null,
              "+",
              React.createElement("span", null, "41"),
            ),
            React.createElement("p", null, "Project completed"),
          ),
          React.createElement(
            "div",
            {
              className: "hero__stat",
            },
            React.createElement(
              "h4",
              null,
              "+",
              React.createElement("span", null, "01"),
            ),
            React.createElement("p", null, "Startup raised"),
          ),
        ),
        React.createElement(
          "div",
          {
            className: "hero__headline",
          },
          React.createElement("h1", null, "Hello"),
          React.createElement("p", null, "- It's Harsh a Design Creator"),
        ),
        React.createElement(
          "div",
          {
            className: "hero__action",
          },
          React.createElement(
            "button",
            null,
            "Scroll down",
            React.createElement("i", {
              className: "ri-arrow-down-long-line",
            }),
          ),
        ),
      ),
      React.createElement(
        "div",
        {
          className: "hero__image",
        },
        React.createElement("img", {
          src: "./img/pfp.png",
          alt: "Image",
        }),
      ),
    ),
  );
}

export default Hero;
