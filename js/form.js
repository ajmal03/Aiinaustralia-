 $("#submit-form").submit((e) => {
      e.preventDefault(); // Prevent page reload
      $.ajax({
        url: "https://docs.google.com/forms/u/5/d/e/1FAIpQLSfwvpykhZC-cGAea6dkZH_bpL5vogA15JzS6llhXdKq9_eaSw/formResponse?pli=1", // Replace with your form's URL
        data: $("#submit-form").serialize(), // Serialize form data
        method: "POST",
        success: function (response) {
          alert("Form submitted successfully!");
          window.location.reload(); // Reload the page
          // or redirect to another page: window.location.href = "https://google.com";
        },
        error: function (err) {
          alert("Form submitted successfully!");
          window.location.reload();
        },
      });
    });
