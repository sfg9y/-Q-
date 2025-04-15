
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let score = 0;
    const answers = {
        q1: "amir",
        q2: "s_qk1",
        q3: "hlo",
        q4: "yes",
        q5: "yes_uncles"
    };
    for (let q in answers) {
        let selected = document.querySelector(`input[name=${q}]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    }
    document.getElementById("result").textContent = `لقد حصلت على ${score} من 5.`;
});
