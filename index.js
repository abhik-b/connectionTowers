function connectionTowers({
  margin = "1px",
  rounded = false,
  height = 20,
  showConnection = true,
  colors = ["green", "yellow", "red"],
}) {
  const parentDiv = document.querySelectorAll(".connectionTower");

  var background = colors[0];
  var background3g = colors[0];
  var background2g = colors[0];
  var margin = margin;
  var height = height;

  var connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  var type = connection.effectiveType;

  const smallestTower = document.createElement("div");
  const smallTower = document.createElement("div");
  const tallTower = document.createElement("div");
  const tallestTower = document.createElement("div");
  const connectionInfo = document.createElement("span");

  smallestTower.style.background = background;
  smallTower.style.background = background;
  tallTower.style.background = background;
  tallestTower.style.background = background;
  connectionInfo.textContent = "4g";

  smallestTower.style.height = `${height * 0.25}px`;
  smallTower.style.height = `${height * 0.5}px`;
  tallTower.style.height = `${height * 0.75}px`;
  tallestTower.style.height = `${height}px`;

  smallestTower.style.width = "5px";
  smallTower.style.width = "5px";
  tallTower.style.width = "5px";
  tallestTower.style.width = "5px";

  smallestTower.style.margin = margin;
  smallTower.style.margin = margin;
  tallTower.style.margin = margin;
  tallestTower.style.margin = margin;

  if (rounded) {
    smallestTower.style.borderRadius = "20px";
    smallTower.style.borderRadius = "20px";
    tallTower.style.borderRadius = "20px";
    tallestTower.style.borderRadius = "20px";
  }

  connection.addEventListener("change", () => {
    type = connection.effectiveType;
    switch (type) {
      case "4g":
        background = colors[0];
        background3g = colors[0];
        background2g = colors[0];
        break;
      case "3g":
        background = colors[1];
        background3g = "transparent";
        background2g = colors[1];

        break;
      default:
        background = colors[2];
        background3g = "transparent";
        background2g = "transparent";
    }
    smallestTower.style.background = background;
    smallTower.style.background = background;
    tallTower.style.background = background2g;
    tallestTower.style.background = background3g;
    connectionInfo.textContent = type;
  });

  parentDiv.forEach((pDiv) => {
    if (showConnection) {
      pDiv.append(connectionInfo);
      pDiv.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    } else {
      pDiv.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    }
    pDiv.append(smallestTower, smallTower, tallTower, tallestTower);
    pDiv.style.display = "grid";

    pDiv.style.alignItems = "end";
    pDiv.style.background = "transparent";
    pDiv.style.height = "20px";
    pDiv.style.width = "26px";
  });
}
