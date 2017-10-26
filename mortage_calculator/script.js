/* Functions */
function formatUSD(el) {
  return (el).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }); /* $2,500.00 */
}
function number_(el) {
  return parseInt(el);
}
/* Variables*/
var payment = 0;
// Get mortage amount input
var amount = document.getElementById("mortage_amount").value;

// Get yearly interest rate input
var irate = document.querySelector("#yearly_interest_rate").value / 100;

// Get term(in years) input
var term_ = document.querySelector("#term_").value;



/* Error Checking */
$('#mortage_amount').change(function () {
  if (number_(document.getElementById("mortage_amount").value) > 1000000) {
    // console.log("That is too muchhhh");

    swal("Oh no!", "The loan amount must be less than or equal to $1,000,000.", "error")

  }


})

$('#yearly_interest_rate').change(function () {
  if (number_(document.getElementById("yearly_interest_rate").value) > 20) {
    // console.log("That is too muchhhh");

    swal("Oh no!", "Interest rate needs to be between 0% and 20%.", "error")

  }
})

$('#term_').change(function () {
  if (number_(document.getElementById("term_").value) > 50) {
    // console.log("That is too muchhhh");

    swal("Oh no!", "The loan term is between 1 and 50 years.", "error")

  }
})

$('#submit').click(function () {

  /* Variables */

  // Get mortage amount input
  var amount = document.getElementById("mortage_amount").value;

  // Get yearly interest rate input
  var irate = document.querySelector("#yearly_interest_rate").value / 100;

  // Get term(in years) input
  var term_ = document.querySelector("#term_").value;


  /* Init numerator and denominator */
  var exponent_term = Math.pow((1 + irate), term_);

  var numerator = irate * exponent_term;
  var denominator = exponent_term - 1.0;

  var interest_calculations = numerator / denominator;



  // Get results
  var result = amount * interest_calculations;

  var payment = result;
  $(".results").html("<p>" + formatUSD(payment) + "</p>");

  /* -------------- */
  // Output Results

});



