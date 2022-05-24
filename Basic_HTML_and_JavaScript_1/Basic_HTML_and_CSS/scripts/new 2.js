function myFunction() {
    param = $('#search').val();
    alert("I am an alert box!");
    if (param != "") {
        $("#status").show();
        var u = 'https://graph.facebook.com/search/?callback=&limit=100&q='+param;
        getResults(u);
        }