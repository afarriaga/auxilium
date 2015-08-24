// Rendering data into table

// Example one
['Backpack','Car','Cow','Cup','Mouse','Book'].forEach(function(x){
    $('table th').append($('<td>').text(x))
});

// Example two
var th = $('table th')
var arr = ['Backpack','Car','Cow','Cup','Mouse','Book'];
arr.forEach(function(item){
    var text = $('<td>').text(item)
    th.append(text)
});