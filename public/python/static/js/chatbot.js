function myfunction() {
    var request = $.ajax({ URL: '/ask_question', type: 'POST' })
    console.log(request)
    return false
}