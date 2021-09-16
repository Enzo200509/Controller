let colorIndicator = document.getElementById('color-indicator');
const colorPicker = new iro.ColorPicker("#color-picker", {
});
colorPicker.on('color:change', function (color) {
    colorIndicator.style.backgroundColor = color.hexString;
})
let x = rand()
function myFunction() {
    document.getElementById('color-indicator').style.backgroundColor = randomColors();
}
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }