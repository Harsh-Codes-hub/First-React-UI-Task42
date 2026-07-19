function Hero() {
  return React.createElement(
    "section",
    null,
    React.createElement(
      "div",
      {
        className: "container",
      },
      React.createElement(
        "div",
        {
          className: "hero__content",
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
              React.createElement("span", null, "+"),
              "Project completed",
            ),
          ),
          React.createElement(
            "div",
            {
              className: "hero__stat",
            },
            React.createElement(
              "h4",
              null,
              React.createElement("span", null, "+"),
              "Startup raised",
            ),
          ),
        ),
        React.createElement(
          "div",
          {
            className: "hero__main",
          },
          React.createElement("h1", null, "Hello"),
          React.createElement("p", null, "It's D.Nova a design wizard"),
        ),
        React.createElement(
          "div",
          {
            className: "hero__action",
          },
          React.createElement(
            "button",
            null,
            React.createElement("i", {
                className: "ri-arrow-down-long-line",
            }),
            "Scroll down",
          ),
        ),
      ),
      React.createElement(
        "div",
        {
          className: "hero__image",
        },
        "Hero Image",
      ),
    ),
  );
}

export default Hero;
