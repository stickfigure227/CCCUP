function loadCCDiv(masterDiv) {
  loadCCMainDiv(masterDiv);
  loadCCAdderDiv(masterDiv);
  loadccCUPDiv(masterDiv);
}
function calculateMDAR(masterDiv) {
  // How long is the MasterDiv?
  const masterDivRect = document.getElementById(masterDiv).getBoundingClientRect();
  const MDAR = masterDivRect.width / 610;
  let xMDAR = 0;
  xMDAR = MDAR > 3 ? 3 : MDAR > 2 ? 2 : 1;
  return xMDAR;
}
window.addEventListener('resize', function() {
  if (document.getElementById('CCAdderDiv').style.display === 'flex') {
    addCC('masterDiv');
  }
})