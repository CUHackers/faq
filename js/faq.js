/*
* @Author: Charlie Gallentine
* @Date:   2019-09-17 14:54:18
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-09-17 15:02:00
*/
var question_heads = document.getElementsByClassName("question-head");

for (var i = 0; i < question_heads.length; i++) {
	question_heads[i].addEventListener("click", function() {
		for (var j = 0; j < question_heads.length; j++)
		{
			// Things that close
			if (
				question_heads[j].parentElement.parentElement.classList.contains("question-open") 
				|| event.target.innerHTML != question_heads[j].innerHTML
			) {
				question_heads[j].parentElement.parentElement.classList.remove("question-open");

				question_heads[j].parentElement.nextElementSibling.classList.remove("block");
				question_heads[j].parentElement.nextElementSibling.classList.add("none");
			}
			// Things that open
			else
			{
				question_heads[j].parentElement.parentElement.classList.add("schedule-item-open");						

				question_heads[j].parentElement.nextElementSibling.classList.add("block");
				question_heads[j].parentElement.nextElementSibling.classList.remove("none");
			}
		}
	});
}