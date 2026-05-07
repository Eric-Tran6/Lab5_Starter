window.addEventListener("DOMContentLoaded", init);
function init() {
	const voiceSelect = document.getElementById("voice-select");
	const talkButton = document.querySelector("button");
	const textInput = document.getElementById("text-to-speak");
	const faceImg = document.querySelector("#explore img");
	const synth = window.speechSynthesis;
	let voices = [];

	function loadVoices() {
		voices = synth.getVoices();
		voiceSelect.innerHTML =
			'<option value="select" disabled selected>Select Voice:</option>';
		voices.forEach((voice, i) => {
			const option = document.createElement("option");
			option.value = i;
			option.textContent = `${voice.name} (${voice.lang})`;
			voiceSelect.appendChild(option);
		});
	}

	loadVoices();
	synth.onvoiceschanged = loadVoices;

	talkButton.addEventListener("click", () => {
		const utterance = new SpeechSynthesisUtterance(textInput.value);
		utterance.voice = voices[voiceSelect.value];
		utterance.onstart = () => {
			faceImg.src = "assets/images/smiling-open.png";
		};
		utterance.onend = () => {
			faceImg.src = "assets/images/smiling.png";
		};
		synth.speak(utterance);
	});
}
