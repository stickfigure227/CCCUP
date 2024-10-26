// HTML
function loadCCAdderDiv(masterDiv) {
  const a = document.getElementById(masterDiv);
  a.innerHTML += `
    <div id="CCAdderDiv" style="display: none; flex-direction: column; gap: 10px; width: 590px;">
      <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 10px;">
        <p id="cupPrompt" style="font-size: 16pt;">Select the type of complaint:</p>
        <button id="backToCCMain" onclick="closeCCAdder()" class="roundButton rBRegular blackButton"></button>
      </div>
      <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between; align-items: center; gap: 10px; margin: 10px;">
        <div style="width: 100%; flex: 1; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px;">
          <button class="rectButtonLong whiteButton" style="flex: 1; height: 100%;" onclick="displayCUP()"><p>Check-up</p></button>
          <button class="rectButtonLong whiteButton" style="flex: 1; height: 100%;" onclick="displayThePain()"><p style="margin: 10px;">Pain<br><span style="font-size: 8pt;">*Don't log 2 different pain at the same time</span></p></button>
        </div>
        <div style="width: 100%; flex: 1; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px;">
          <button class="rectButtonLong whiteButton" style="flex: 1; height: 100%;" onclick="displayReq()"><p>Requesting Treatment</p></button>
          <button class="rectButtonLong whiteButton" style="flex: 1; height: 100%;" onclick="displayPOG()"><p>Purchase of Goods</p></button>
        </div>
        <div style="width: 100%; flex: 1; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px;">
          <button class="rectButtonLong redButton" style="flex: 1; height: 100%;" onclick="displayEmer()"><p>EMERGENCY</p></button>
          <button class="rectButtonLong blackButton" style="flex: 1; height: 100%;" onclick="displayOthersCC()"><p>Others</p></button>
        </div>
      </div>
    </div>
  `;
}

// Arrays


// Action
function closeCCAdder() {
  document.getElementById('CCMainDiv').style.display = 'flex';
  document.getElementById('CCAdderDiv').style.display = 'none';
}
function displayCUP() {
  document.getElementById('CCCUP').style.display = 'flex';
  document.getElementById('CCAdderDiv').style.display = 'none';
}
function displayThePain() {

}
function displayReq() {

}
function displayPOG() {

}
function displayEmer() {

}
function displayOthersCC() {

}

// F/up Actions