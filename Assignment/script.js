// Flag to track if results are already displayed
let resultsShown = false;

// Function to calculate percentage
function calculatePercentage() {
  // 1. Get the values from the input fields
  const cheMarks = document.getElementById("che-marks").value;
  const mathMarks = document.getElementById("math-marks").value;
  const phyMarks = document.getElementById("phy-marks").value;
  const comMarks = document.getElementById("com-marks").value;

  // 2. Convert string values to numbers (as input fields return strings)
  const parsedCheMarks = parseInt(cheMarks);
  const parsedMathMarks = parseInt(mathMarks);
  const parsedPhyMarks = parseInt(phyMarks);
  const parsedComMarks = parseInt(comMarks);

  // 3. Validate if all marks are within the valid range (0-100)
  if (isNaN(parsedCheMarks) || isNaN(parsedMathMarks) || isNaN(parsedPhyMarks) || isNaN(parsedComMarks) ||
      parsedCheMarks < 0 || parsedCheMarks > 100 ||
      parsedMathMarks < 0 || parsedMathMarks > 100 ||
      parsedPhyMarks < 0 || parsedPhyMarks > 100 ||
      parsedComMarks < 0 || parsedComMarks > 100) {
    alert("Please enter valid marks between 0 and 100 for each subject.");
    return; // Exit the function if validation fails
  }

  // 4. Only proceed with calculation if results haven't been shown yet
  if (!resultsShown) {
    resultsShown = true; // Mark results as shown

    // 5. Calculate total marks
    const totalMarks = parsedCheMarks + parsedMathMarks + parsedPhyMarks + parsedComMarks;

    // 6. Calculate percentage
    const percentage = (totalMarks / 400) * 100; // Assuming 4 subjects, each with 100 marks

    // 7. Calculate total obtained marks
    const totalObtainedMarks = totalMarks; // Since total marks represent all obtained marks

    // 8. Calculate grade (assuming a simple A, B, C system based on percentage)
    let grade;
    if (percentage >= 90) {
      grade = "A";
    } else if (percentage >= 80) {
      grade = "B";
    } else if (percentage >= 70) {
      grade = "C";
    } else {
      grade = "F";
    }

    // 9. Update the results in the HTML elements
    document.getElementById("total-marks").textContent = totalMarks;
    document.getElementById("percentage").textContent = percentage.toFixed(2) + "%"; // Format percentage with 2 decimal places
    document.getElementById("total-marks-obtained").textContent = totalObtainedMarks;
    document.getElementById("grade").textContent = grade;
  } else {
    // Inform user that results are already displayed
    alert("Please change your input to re-calculate the marks.");
  }
}
