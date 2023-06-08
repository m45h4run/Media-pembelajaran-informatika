
var currentQuestion = 0;
var correctAnswers = 0;

function showQuestion() {
	var question = questions[currentQuestion];
	var questionElement = document.getElementById("question");
	var optionsElement = document.getElementById("options");
	var feedbackElement = document.getElementById("feedback");
	questionElement.innerHTML = question.question;
	optionsElement.innerHTML = "";
	feedbackElement.innerHTML = "";

	for (var i = 0; i < question.options.length; i++) {
		var option = question.options[i];
		var id = "option" + i;
		var label = '<label><input required type="radio" name="answer" value="' + i + '" id="' + id + '">' + option + '</label>';
		optionsElement.innerHTML += label;
	}

	var submitButton = document.getElementById("submit");
	if (currentQuestion == questions.length - 1) {
		submitButton.value = "Selesai";
	} else {
		submitButton.value = "Selanjutnya";
	}
}

function checkAnswer() {
	var answer = document.querySelector('input[name="answer"]:checked').value;
	if (answer == questions[currentQuestion].answer) {
		correctAnswers++;
		document.getElementById("feedback").innerHTML = "Jawaban benar!";
	} else {
		document.getElementById("feedback").innerHTML = "Jawaban salah.";
	}
	currentQuestion++;
	if (currentQuestion < questions.length) {
		showQuestion();
	} else {
		showResult();
	}
	return false;
}

function showResult() {
	var container = document.getElementById("quiz-form");
	var nilai = (correctAnswers/questions.length)*100;
	var pesan = '';
	if (nilai<=60) {
		pesan =', Belajar lagi.';
	}else{
		pesan = ', Selamat yah..';
	}
	container.innerHTML = "<h2>Hasil Kuis</h2>";
	container.innerHTML += "<p>Kamu menjawab " + correctAnswers + " benar dari " + questions.length + " pertanyaan.</p>";
	container.innerHTML += "<p>Jadi nilai kamu adalah "+nilai+" "+pesan+"</p>";
	container.innerHTML += "<center><p><a href='' id='btn'>Ulangi</a> <a href="+kembali+" id='btn'>Keluar</a></p></center>";
}
showQuestion();
