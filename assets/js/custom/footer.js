$('body footer').load('http://6thfinger.com/portpolio/include/footer.html', function() {
  var source = $(this).children().clone();
  // $(this).append(source);
});
