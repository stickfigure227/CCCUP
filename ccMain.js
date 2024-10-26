// HTML
function loadCCMainDiv(masterDiv) {
  const a = document.getElementById(masterDiv);
  a.innerHTML += `
    <div id="CCMainDiv" style="height: calc(100% - 20px); width: 590px; display: flex; flex-direction: column; align-items: center;">
      <div style="display: flex; flex-direction: row; gap: 10px; align-items: center;">
        <p style="font-size: 16pt;">Chief Complaint:</p>
        <button onclick="clearCC()" class="rectButtonShort blackButton">
          <p>Clear</p>
        </button>
        <button onclick="addCC('${masterDiv}')" class="rectButtonShort blackButton"><p>Add</p></button>
      </div>
      <div id="logCC" style="overflow-y: auto; padding: 10px; width: 500px; flex: 1; border-radius: 20px; box-shadow: 4px 4px 8px 1px rgba(0,0,0,0.6);"></div> 
    </div>
  `;
}

// Arrays
let CC = [];
const CCMainDiv = document.getElementById('CCMainDiv');

// Actions
function addCC(masterDiv) {
  const a = calculateMDAR(masterDiv);
  if (a === 3) {
    document.getElementById('CCMainDiv').style.display = 'flex';
    document.getElementById('CCAdderDiv').style.display = 'flex';
  } else {
    document.getElementById('CCMainDiv').style.display = 'none';
    document.getElementById('CCAdderDiv').style.display = 'flex';
  }
}
function delCC(logX, X) {
  document.getElementById(logX).remove();
  CC.splice(X, 1);
  displayCC();
}
function clearCC() {
  CC = [];
  displayCC();
}
// Follow-up actions
function displayCC() {
  document.getElementById('logCC').innerHTML = "";
  let a = '';
  for (let i = 0; i < CC.length; i++) {
    a += `
      <div id="log${i}" class="logCCDiv" style="margin-top: 10px;">
        <div>${i + 1}. ${CC[i]}</div>
        <button class="roundButton rBSmall blackButton" onclick="delCC('log${i}', ${i})"></button>
      </div>
    `;
  }
  logCC.innerHTML = a;
}