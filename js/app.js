function resetForm(){

}

function goNext(){
    showPreconfirmation()
}

function confirm() {
    showConfirmation();
}
function getAccountDetail(inputType,inputValue){
    $.ajax({
        url: '@Url")',
        dataType: "json",
        data: {inputType:inputType,inputValue:inputValue},
        type: 'post',
        success: function(data) {

        }
    })
}

function showForm(){
    $(".forum-add").show();
    $(".forum-pre-confirm").hide();
    $(".forum-confirm").hide();
    showNavBar();
}

function showPreconfirmation() {
    $(".forum-pre-confirm").show();
    $(".forum-add").hide();
    $(".forum-confirm").hide();
    hideNavBar();
}

function showConfirmation() {
    $(".forum-add").hide();
    $(".forum-pre-confirm").hide();
    $(".forum-confirm").show();
    hideNavBar();
}

function hideNavBar() {
    $(".nav_bar").hide();
}

function showNavBar() {
    $(".nav_bar").show();
}