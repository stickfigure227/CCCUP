function loadccCUPDiv(masterDiv) {
  const a = document.getElementById(masterDiv);
  a.innerHTML += `
    <div id="CCCUP" style="display: none; flex-direction: column; gap: 10px; width: 590px;">
      <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 10px;">
        <p id="cupPrompt" style="font-size: 16pt;">Dental check-up reason:</p>
        <button id="backToCCMain" onclick="closeCUP()" class="roundButton rBRegular blackButton"></button>
      </div>
      <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between; align-items: center; gap: 10px; margin: 10px;">
        <div style="width: 100%; flex: 1; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px;">
          <button class="rectButtonLong redButton" style="flex: 1; height: 100%;" onclick="saveCUP(0)"><p>Regular check-up</p></button>
        </div>
        <div style="width: 100%; flex: 1; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px;">
          <button class="rectButtonLong whiteButton" style="flex: 1; height: 100%;" onclick="loadccCUPDetails('${masterDiv}', 'mobile')"><p>Mobile</p></button>
          <button class="rectButtonLong whiteButton" style="flex: 1; height: 100%;" onclick="loadccCUPDetails('${masterDiv}', 'fracture')"><p style="margin: 10px;">Fracture</p></button>
        </div>
        <div style="width: 100%; flex: 1; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px;">
          <button class="rectButtonLong whiteButton" style="flex: 1; height: 100%;" onclick="loadccCUPDetails('${masterDiv}', 'cavity')"><p>Cavity</p></button>
          <button class="rectButtonLong whiteButton" style="flex: 1; height: 100%;" onclick="loadccCUPDetails('${masterDiv}', 'refer')"><p>Referred from somehwere</p></button>
        </div>
        <div style="width: 100%; flex: 1; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px;">
          <button class="rectButtonLong blackButton" style="flex: 1; height: 100%;" onclick="loadccCUPDetails('${masterDiv}', '')"><p>Others</p></button>
        </div>
      </div>
    </div>
  `;
}
// If wanna add a detail element, please update the array ID
function loadccCUPDetails(masterDiv, reason) {
  if (!document.getElementById('ccCupDetails')) {

  } else {
    document.getElementById('ccCupDetails').remove();
  }
  const a = document.getElementById(masterDiv);
  let c = '';
  let d = '';
  if (reason === 'refer') {
    c = 'Details of Referral';
    d = `
      <div id="ccCUPRRDiv" class="summarySubDiv" style="margin-bottom: 10px;">
        <label >R : </label>
        <label style="width: fit-content;">Check-up referral</label>
      </div>
      <div id="ccCUPR0Div" class="summarySubDiv">
        <label >L : </label>
        <input id="ccCUPD0"  placeholder="From?...">
      </div>
      <div id="ccCUPR1Div" class="summarySubDiv">
        <label >R : </label>
        <input id="ccCUPR1"  placeholder="Reason?...">
      </div>
      <div id="ccCUPR2Div" class="summarySubDiv" style="margin-top: 10px;">
        <input id="ccCUPR2"  placeholder="Other details...">
      </div> 
    `;
  } else {
    const b = reason === '' ? '<input id="ccCUPDR"  placeholder="Reason...">' : `<label style="width: fit-content;">${reason}</label>`;
    c = 'Details of Check-Up Reason';
    d = `
      <div id="ccCUPDRDiv" class="summarySubDiv" style="margin-bottom: 10px;">
        <label >R : </label>
        ${b}
      </div>
      <div id="ccCUPD0Div" class="summarySubDiv">
        <label >M : </label>
        <input id="ccCUPD0"  placeholder="Taking painkillers? or other drugs to treat it?...">
      </div>
      <div id="ccCUPD1Div" class="summarySubDiv">
        <label >S : </label>
        <input id="ccCUPD1"  placeholder="Site...">
      </div>
      <div id="ccCUPD2Div" class="summarySubDiv">
        <label >O : </label>
        <input id="ccCUPD2"  placeholder="Onset...">
        <input id="ccCUPD3" placeholder="Sudden / gradual...">
      </div>
      <div id="ccCUPD4Div" class="summarySubDiv">
        <label >A : </label>
        <input id="ccCUPD4"  placeholder="Associated symptoms...">
      </div>
      <div id="ccCUPD5Div" class="summarySubDiv">
        <label >S : </label>
        <input id="ccCUPD5"  placeholder="Severity...">
      </div> 
      <div id="ccCUPD6Div" class="summarySubDiv" style="margin-top: 10px;">
        <input id="ccCUPD6"  placeholder="Other Hx...">
      </div> 
    `;
  }
  a.innerHTML += `
    <div id="ccCupDetails" class="painDivs">
      <div style="width: 500px; align-self: center; text-align: center; font-size: 16pt; margin: 20px 0;">
        <label>${c}</label>
      </div>
      <div id="ccCupDetailsDiv" style="width: 500px; align-self: center;">
       ${d}      
      </div>
      <div style="margin-top: 20px; display: flex; flex-direction: row; width: 100%; justify-content: center; gap: 10px;">
        <button id="clearCCCUPD" onclick="clearCCCUP('ccCupDetails')" class="rectButtonShort blackButton">
          <p style="color: white;">clear</p>
        </button>
        <button id="exitCCCUPD" onclick="backCCCUP('ccCupDetails')" class="rectButtonShort redButton">
          <p style="color: white;">exit</p>
        </button>
        <button id="saveCCCUPD" onclick="saveCUP(1)" class="rectButtonShort redButton" style="display: none;">
          <p style="color: white;">save</p>
        </button>
      </div>
      <div style="margin-top: 20px; display: flex; flex-direction: row; width: 100%; justify-content: center; gap: 10px;">
        <p style="color: black;">click "clear" before returning to C/up reason</p> 
      </div>
    </div>
  `;
  document.getElementById('CCCUP').style.display = 'none';
  document.getElementById('ccCupDetails').style.display = 'flex';
  ccCupDetails = document.getElementById('ccCupDetails');
  inputs1 = ccCupDetails.querySelectorAll('input');
}
function saveCUP(a) {
  if (a === 0) {
    if (!CC.includes('Regular dental check-up')) {
      CC.push('Regular dental check-up');
    }
  }
  if (a === 1) {
    const ccCupDetailsDiv = document.getElementById('ccCupDetailsDiv');
    const summaryDivs = ccCupDetailsDiv.querySelectorAll('.summarySubDiv');
    
    const divSentences = [];

    summaryDivs.forEach(div => {
      const elements = Array.from(div.children);
      let sentence = '';
      elements.forEach((element, index) => {
        if (element.tagName === 'LABEL') {
          sentence += `${element.textContent.trim()} `;
        } else if (element.tagName === 'INPUT') {
          const value = element.value.trim();
          // Only add the input value if it is not empty
          if (value) {
            sentence += `${value}`; // Add input value
            
            // Check if the next element is also an input and both have values
            const nextElement = elements[index + 1];
            if (nextElement && nextElement.tagName === 'INPUT') {
              const nextValue = nextElement.value.trim();
              if (nextValue) {
                sentence += ', '; // Add a comma only if the next input also has a value
              }
            }
          }
        }
      })
      // Store the constructed sentence for each div
      divSentences.push(sentence);
    });
    let b = '';
    for (let i = 0; i < divSentences.length; i++) {
      if (i === 0) {
        let c = '';
        c = divSentences[i].slice(4);
        b += `Check-up, ${c}<ul>`;
      } else if (i === divSentences.length - 1) {
        if (divSentences[i] === "") {
          b += '</ul>';
        } else  {
          b += `<li>${divSentences[i]}</li></ul>`
        }
      } else {
        b += `<li>${divSentences[i]}</li>`;
      }
    }
    console.log(b);
    CC.push(b);
  }
  displayCC();
  if (document.getElementById('ccCupDetails')) {
    clearCCCUP('ccCupDetails');
  }
  document.getElementById('CCCUP').style.display = 'none';
  document.getElementById('CCMainDiv').style.display = 'flex';
  document.getElementById('ccCupDetails').style.display = 'none';
}
function closeCUP() {
  document.getElementById('CCCUP').style.display = 'none';
  document.getElementById('CCAdderDiv').style.display = 'flex';
}
function displayCUPsite(a, input) {
  if (a === 1) {
    loadccCUPDetails('masterDiv');
    document.getElementById('CCCUP').style.display = 'none';
    document.getElementById('painSummaryR').value = input;
  }
}

// HTML

// Arrays
const ccCUPDDiv = ['ccCUPDRDiv', 'ccCUPD0Div', 'ccCUPD1Div', 'ccCUPD2Div', 'ccCUPD4Div', 'ccCUPD5Div', 'ccCUPD6Div'];
const ccCUPD = ['ccCUPDR','ccCUPD0','ccCUPD1','ccCUPD2','ccCUPD3','ccCUPD4','ccCUPD5','ccCUPD6'];
const ccCUPRDiv = ['ccCUPRRDiv', 'ccCUPR0Div', 'ccCUPR1Div', 'ccCUPR2Div'];
const ccCUPR = ['ccCUPRR', 'ccCUPR0', 'ccCUPR1', 'ccCUPR2'];
let ccCupDetails = '';
let inputs1 = "";
// Actions
function clearCCCUP(div) {
  const a = document.getElementById(div);
  const inputs = a.querySelectorAll("input");
  inputs.forEach(input => input.value = "");
  document.getElementById('exitCCCUPD').style.display = 'inline';
  document.getElementById('saveCCCUPD').style.display = 'none';
}
function backCCCUP(div) {
  document.getElementById(div).style.display = 'none';
  document.getElementById('CCCUP').style.display = 'flex';
}
// Follow-up
function addInputEventListeners(ccCupDetails) {
  const inputs = ccCupDetails.querySelectorAll('input');
  inputs.forEach(input => {
      input.addEventListener('input', inputEventHandler);
  });
}
function removeInputEventListeners(ccCupDetails) {
  const inputs = ccCupDetails.querySelectorAll('input');
  inputs.forEach(input => {
      input.removeEventListener('input', inputEventHandler);
  });
}
function inputEventHandler(event) {
  if (event.target.value !== "") {
    document.getElementById('exitCCCUPD').style.display = 'none';
    document.getElementById('saveCCCUPD').style.display = 'inline';
  } else {
    document.getElementById('exitCCCUPD').style.display = 'inline';
    document.getElementById('saveCCCUPD').style.display = 'none';
  }
}
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
          if (node.id === 'ccCupDetails') {
              addInputEventListeners(node);
          }
      });
      mutation.removedNodes.forEach(node => {
          if (node.id === 'ccCupDetails') {
              removeInputEventListeners(node);
          }
      });
  });
});
observer.observe(document.body, { childList: true, subtree: true });
// F/UP saving details
