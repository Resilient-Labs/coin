//event listeners for edit and delete button. Added by Elvin and Suf. Working. We're using the data-set to grab the specific income post
let incomeEdit = document.querySelectorAll('#incomeTableEdit')
Array.from(incomeEdit).forEach(function(element) {
 element.addEventListener('click', function(element) {

   let incomeID = this.parentNode.dataset.id

   let incomeEdit = prompt("edit your income")
   fetch('/editIncome', {
     method: 'put',
     headers: {'Content-Type' : 'application/json'},
     body: JSON.stringify({
       // _id: id,
       incomeID: incomeID,
       incomeEdit: incomeEdit
     })
   })
   .then(function (response) {
     window.location.reload()
   })
   
 })
})

let incomeDelete = document.querySelectorAll('#incomeTableDelete')
Array.from(incomeDelete).forEach(function(element) {
 element.addEventListener('click', function(element) {

   let incomeID = this.parentNode.dataset.id

   fetch('/deleteIncome', {
     method: 'delete',
     headers: {'Content-Type' : 'application/json'},
     body: JSON.stringify({
       // _id: id,
       incomeID: incomeID,
     })
   })
   .then(function (response) {
     window.location.reload()
   })
   
 })
})

let expenseEdit = document.querySelectorAll('#expenseTableEdit')
Array.from(expenseEdit).forEach(function(element) {
 element.addEventListener('click', function(element) {

   let expenseID = this.parentNode.dataset.id

   let expenseEdit = prompt("edit your expense")
   fetch('/editExpense', {
     method: 'put',
     headers: {'Content-Type' : 'application/json'},
     body: JSON.stringify({
       // _id: id,
       expenseID: expenseID,
       expenseEdit: expenseEdit
     })
   })
   .then(function (response) {
     window.location.reload()
   })
   
 })
})

let expenseDelete = document.querySelectorAll('#expenseTableDelete')
Array.from(expenseDelete).forEach(function(element) {
 element.addEventListener('click', function(element) {

   let expenseID = this.parentNode.dataset.id

   fetch('/deleteExpense', {
     method: 'delete',
     headers: {'Content-Type' : 'application/json'},
     body: JSON.stringify({
       // _id: id,
       expenseID: expenseID,
     })
   })
   .then(function (response) {
     window.location.reload()
   })
   
 })
})
// Isaiah's Contribution
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
    window.onload=function(){
      document.getElementById('refresh').addEventListener('click', () => chart.refresh());
    }
      let element = document.querySelector(".body-content")
    //filtering
    //(based on future month collections...)
    const userSelect = document.getElementById("user-filter")
    // automates click of select 
    // renders user information only
    window.addEventListener("load",function(){
      setTimeout(()=> {
        document.getElementById("user-filter").click();
      }
      ,1000);
    },true);
    
    userSelect.addEventListener("click", async (e) => {
      const userSelect = e.target.value;
      console.log("success")
      userSelect ? chart.setFilter({ user : {'$oid': userSelect} }) : chart.setFilter({});
    });

    // End of Isaiah's Contribution


  }
  renderChart().catch((e) => window.alert(e.message));
  // ------------------JM: INCOME TABLE (edit&delete)----------------------
  //JM ORIGINAL DELETE INCOME FUNCTION
  //UPDATED BY SM
  function deletedIncome(id) {
    fetch('/incomes', {
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

  function deletedExpenses(id) {
    fetch('/expenses', {
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
function editIncome(id) {
 
  // let incomeEdit = document.querySelector('.updateIncome').value
  console.log("hello")
  
  let incomeEdit = prompt("edit your income")
  fetch('/incomes', {
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

//edit for expenses
//error edit has already been declared
function editExpenses(id) {
  // let incomeEdit = document.querySelector('.updateIncome').value
  
  let expenseEdit = prompt("edit your expense")
  fetch('/expenses', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: id,
      updateExpense: updateExpense,
      expenseEdit: expenseEdit
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