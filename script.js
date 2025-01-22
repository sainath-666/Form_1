document.addEventListener('DOMContentLoaded', function() {
  // Rating Sliders
  const designRating = document.getElementById('designRating');
  const usabilityRating = document.getElementById('usabilityRating');
  const performanceRating = document.getElementById('performanceRating');

  const designValue = document.getElementById('designValue');
  const usabilityValue = document.getElementById('usabilityValue');
  const performanceValue = document.getElementById('performanceValue');

  designRating.addEventListener('input', function() {
    designValue.textContent = designRating.value;
  });

  usabilityRating.addEventListener('input', function() {
    usabilityValue.textContent = usabilityRating.value;
  });

  performanceRating.addEventListener('input', function() {
    performanceValue.textContent = performanceRating.value;
  });

  // Handle Form Submission
  const feedbackForm = document.getElementById('feedbackForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show the alert message
    alert("Thank you for your feedback!");

    // Hide the form and show the thank you message
    feedbackForm.style.display = 'none';
    thankYouMessage.classList.remove('hidden');

    // Reset the form fields
    feedbackForm.reset();

    // Reset rating sliders to default values
    designRating.value = 5;
    usabilityRating.value = 5;
    performanceRating.value = 5;
    designValue.textContent = 5;
    usabilityValue.textContent = 5;
    performanceValue.textContent = 5;
  });
});
