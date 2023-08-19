var steps;
var initial;
var total_price;
var return_rate;

function calculate_next_bets(loss, return_rate){
    return Math.ceil(loss / (return_rate - 1));
}


function insertData(){
    steps = parseInt($('[name="martingleSteps"]').val());
    initial = parseInt($('[name="bidAmount"]').val());
    total_price = initial;
    return_rate = 1 + parseInt($('[name="returnPercentage"]').val())/100;

    $('tbody').html('')
    $('tbody').append(`
        <tr>
        <th>1</th>
        <td>$${initial}</td>
        <td></td>
        </tr>
    `)
    
    for (let i = 0; i < steps-1; i++) {    
        var next_bet = calculate_next_bets(initial, return_rate)
        initial = initial + next_bet
        total_price = total_price + next_bet
    
        $('tbody').append(`
            <tr>
            <th>${i+2}</th>
            <td>$${next_bet}</td>
            <td class="text-right">$${total_price}</td>
            </tr>
        `)
    }
}


insertData()
$("form").submit(function(e){
    e.preventDefault();
    insertData()
});


    


