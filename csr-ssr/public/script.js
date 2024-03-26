
function refreshList(){
    // sending request using jquery 
    $('#list').empty()
    $.get('/todos',function(data){
        
        for(let item of data){
            $('#list').append(`<li>${item}</li>`)
        }

    })
}

refreshList();

$('#btn').on('click',function(){
    let todo = $('#inp').val();
    // console.log(todo);
    $.post('/todos',{todo},function(data){
        console.log(data);
        $('#inp').val("");
    })
    refreshList();
})