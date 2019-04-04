var quiz = [
	{
		question: 'Jaký je nejlidnatější stát USA?',
		answers: {
			a: 'New York',
			b: 'Texas',
            c: 'Kalifornie',
            d: 'Florida'
		},
		correctAnswer: 'c'
	},
	{
		question: "V jakém státě se velmi často vyskytují hurikány?",
		answers: {
			a: 'Florida',
			b: 'Utah',
            c: 'Michigan',
            d: 'Ohio'
		},
		correctAnswer: 'a'
    },
    {
		question: 'Která z vlajek patří státu Delaware?',
		answers: {
			a: 'Obrázek 1',
			b: 'Obrázek 2',
            c: 'Obrázek 3',
            d: 'Obrázek 4'
		},
		correctAnswer: 'c'
    },
    {
		question: 'Kde se nachází Nevada?',
		answers: {
			a: 'Obrázek A',
			b: 'Obrázek B',
            c: 'Obrázek C',
            d: 'Obrázek D'
		},
		correctAnswer: 'd'
    },
    {
		question: 'Kolik malých ostrovů či útesů tvoří USA?',
		answers: {
			a: '5',
			b: '10',
            c: '15',
            d: '20'
		},
		correctAnswer: 'b'
	}
];

var quizQuestions = document.getElementById('otazky');
var quizResults = document.getElementById('vysledky');
var submitButton = document.getElementById('submit');

generateQuiz(quiz, quizQuestions, quizResults, submitButton);

function generateQuiz(questions, quizQuestions, quizResults, submitButton){
	function showQuestions(questions, quizQuestions){
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			answers = [];
			for(letter in questions[i].answers){
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}
		quizQuestions.innerHTML = output.join('');
	}

	function showResults(questions, quizQuestions, quizResults){
		var quizAnswers = quizQuestions.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;
		
		for(var i=0; i<questions.length; i++){
			userAnswer = (quizAnswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				quizAnswers[i].style.color = 'green';
			}
			else{
				quizAnswers[i].style.color = 'darkred';
			}
		}
		quizResults.innerHTML = 'Odpověděl jsi správně na ' + numCorrect + ' z ' + questions.length + ' odpovědí.';
	}
	showQuestions(questions, quizQuestions);
	submitButton.onclick = function(){
		showResults(questions, quizQuestions, quizResults);
	}
}