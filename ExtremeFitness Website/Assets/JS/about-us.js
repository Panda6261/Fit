/* about-us.js */

// Filter reviews based on star rating
document.getElementById('star-filter').addEventListener('change', function() {
    var ratingFilter = this.value;
    var reviews = document.querySelectorAll('.review');

    reviews.forEach(function(review) {
        var rating = review.getAttribute('data-rating');
        if (ratingFilter === 'all' || rating === ratingFilter) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    });
});
