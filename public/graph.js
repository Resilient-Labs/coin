//Charts render in profile.ejs
//connects to MongoDB Charts SDK via link in html/ejs
const ChartsEmbedSDK = window.ChartsEmbedSDK;
//uses base url to connect charts via chart objects
async function renderChart() {
    const sdk = new ChartsEmbedSDK({
      baseUrl: 'https://charts.mongodb.com/charts-coin-flgmg',
    });
    // embed a chart
    //chart object
    const chart = sdk.createChart({
      //example: needs to be change later
      chartId: '63b73d06-b222-419e-815b-6652df226abd',
      height: "700px",
    });
    // // render the chart into divs(s)
    chart
      .render(document.getElementById('chart'))
    //refreshes page
    // window.onload=function(){
    //   document.getElementById('refresh').addEventListener('click', () => chart.refresh());
    // }
    //   let element = document.querySelector(".body-content")
    //filtering
    //(based on future month collections...)
    // const monthSelect = document.getElementById("month-filter")
    // monthSelect.addEventListener("change", async (e) => {
    //   const monthSelect = e.target.value;
    //   console.log(monthSelect)
    //   monthSelect ? chart.setFilter({ month : {'$oid': monthSelect} }) : chart.setFilter({});
    // });
  }
  renderChart().catch((e) => window.alert(e.message));
  // ------------------JM: INCOME TABLE (edit&delete)----------------------
  //JM ORIGINAL DELETE INCOME FUNCTION
  //UPDATED BY SM
  function deleteEvent(id) {
    fetch('/incomes/deleteincomes', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: id,
      })
    }).then(function (response) {
      window.location.reload()
      // window.location.href = '/incomes'
    })
  }

//  SM: delete function taken from old code
// function deleted(id){
//   fetch('/spells', {
//     method: 'delete',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       _id: id,
//     })
//   }).then(function (response) {
//     window.location.reload()
//   })
// }
//===JM ORIGINAL INCOME EDIT FUNCTION
//===edited by SM
function edit(id) {
  // let incomeEdit = document.querySelector('.updateIncome').value
  let incomeEdit = prompt("edit your amount")
  fetch('/incomes/edit', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: id,
      updateIncome: updateIncome,
      incomeEdit: incomeEdit
    })
  })
  .then(function (response) {
    window.location.reload()
  })
}
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.href = `/incomes/${_id}`
//     })
// }
//====SM: edit function taken from old code
// function edit(id){
//   let spellName = prompt("what is the new name of your spell?")
//   let ritual = prompt("what is your new ritual?")
//   fetch('/spells', {
//     method: 'put',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       _id: id,
//       spellName: spellName,
//       ritual: ritual
//     })
//   })
//   .then(function (response) {
//     window.location.reload()
//   })
// }
  //this is going to target the button to delete the herb
  //==============SM CODE FROM DEMO DAY UNDER CONSTRUCTION
// document.querySelectorAll(".deleteBtn").forEach(button => {
//   button.addEventListener("click", function() {
//       console.log("send delete")
//           const herbid = this.id
//           fetch('/deleteHerbs', {
//               method: 'delete',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//               herbid
//               })
//           })
//               .then(response => {
//                   if (response.ok) return response.body
//               })
//               .then(data => {
//                   window.location.reload(true)
//               })
//       });
// })