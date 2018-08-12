$('.nav-link').click(function() {
    // Adjust the DOM, unless going to blog
    if (!($(this).html() === 'Blog')) {
        // Only adjust the DOM if nav to different page
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $('.container').toggle();
        }
    }
});
