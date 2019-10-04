$(".todos a").each( function boldPages() {
    var taskName = $(this).text()
    if(taskName.includes("-")) {
    [beforeDash, afterDash] = taskName.split(" - ");
    $(this).html(`<strong>${beforeDash}</strong> - ${afterDash}`);
    }
});