$(document).on("mouseenter", "#linkedin", function () {
    $("#linkedintext").addClass("translatelinkedintextenter").removeClass("translatelinkedintextexit")
});

$(document).on("mouseleave", "#linkedin", function () {
    $("#linkedintext").addClass("translatelinkedintextexit").removeClass("translatelinkedintextenter")
});

$(document).on("mouseenter", "#email", function () {
    $("#emailtext").addClass("translateemailtextenter").removeClass("translateemailtextexit")
});

$(document).on("mouseleave", "#email", function () {
    $("#emailtext").addClass("translateemailtextexit").removeClass("translateemailtextenter")
});

$(document).on("mouseenter", "#github", function () {
    $("#githubtext").addClass("translategithubtextenter").removeClass("translategithubtextexit")
});

$(document).on("mouseleave", "#github", function () {
    $("#githubtext").addClass("translategithubtextexit").removeClass("translategithubtextenter")
});

$(document).on("mouseenter", "#resume", function () {
    $("#resumetext").addClass("translateresumetextenter").removeClass("translateresumetextexit")
});

$(document).on("mouseleave", "#resume", function () {
    $("#resumetext").addClass("translateresumetextexit").removeClass("translateresumetextenter")
});

/*-----------------------*/

$(document).on("mouseleave", "#github", function () {
    $("#githubtext").addClass("translategithubtextexit").removeClass("translategithubtextenter")
});

$(document).on("mouseenter", "#resume", function () {
    $("#resumetext").addClass("translateresumetextenter").removeClass("translateresumetextexit")
});

$(document).on("mouseleave", "#resume", function () {
    $("#resumetext").addClass("translateresumetextexit").removeClass("translateresumetextenter")
});