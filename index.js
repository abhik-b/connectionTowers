function connectionTowers() {
  const parentDiv = document.querySelectorAll(".connectionTower");
  var background = "red";
  var margin = "1px";

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

  smallestTower.style.height = "5px";
  smallTower.style.height = "10px";
  tallTower.style.height = "15px";
  tallestTower.style.height = "20px";

  smallestTower.style.width = "5px";
  smallTower.style.width = "5px";
  tallTower.style.width = "5px";
  tallestTower.style.width = "5px";

  smallestTower.style.margin = margin;
  smallTower.style.margin = margin;
  tallTower.style.margin = margin;
  tallestTower.style.margin = margin;

  connection.addEventListener("change", () => {
    type = connection.effectiveType;
    switch (type) {
      case "4g":
        background = "green";
        break;
      case "3g":
        background = "yellow";
        break;
      default:
        background = "red";
    }
    smallestTower.style.background = background;
    smallTower.style.background = background;
    tallTower.style.background = background;
    tallestTower.style.background = background;
    connectionInfo.textContent = type;
  });

  parentDiv.forEach((pDiv) => {
    pDiv.append(
      connectionInfo,
      smallestTower,
      smallTower,
      tallTower,
      tallestTower
    );
    pDiv.style.display = "grid";
    pDiv.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    pDiv.style.alignItems = "end";
    pDiv.style.background = "transparent";
    pDiv.style.height = "20px";
    pDiv.style.width = "26px";
  });
}
