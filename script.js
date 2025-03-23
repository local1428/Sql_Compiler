// script.js

function checkQuery() {
    // Get the user's input query
    const query = document.getElementById('query-input').value.trim().toLowerCase();
    const result = document.getElementById('result');

    // Correct query for the question
    const correctQuery = "select * from employees";

    // Check if the user's query matches the correct query
    if (query === correctQuery) {
        result.textContent = "Correct! You've written the correct SQL query.";
        result.style.color = "green";
    } else {
        result.textContent = "Oops! Try again. The correct query is: 'SELECT * FROM employees'.";
        result.style.color = "red";
    }
}
