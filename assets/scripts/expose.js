window.addEventListener("DOMContentLoaded", init);
function init() {
	const hornSelect = document.getElementById("horn-select");
	const hornImage = document.querySelector("#expose img");
	const audio = document.querySelector("audio");
	const volumeSlider = document.getElementById("volume");
	const volumeIcon = document.querySelector("#volume-controls img");
	const playButton = document.querySelector("button");

	hornSelect.addEventListener("change", () => {
		const selected = hornSelect.value;
		hornImage.src = `assets/images/${selected}.svg`;
		audio.src = `assets/audio/${selected}.mp3`;
	});

	volumeSlider.addEventListener("input", () => {
		const vol = Number(volumeSlider.value);
		audio.volume = vol / 100;
		if (vol === 0) {
			volumeIcon.src = "assets/icons/volume-level-0.svg";
		} else if (vol < 33) {
			volumeIcon.src = "assets/icons/volume-level-1.svg";
		} else if (vol < 67) {
			volumeIcon.src = "assets/icons/volume-level-2.svg";
		} else {
			volumeIcon.src = "assets/icons/volume-level-3.svg";
		}
	});

	playButton.addEventListener("click", () => {
		audio.play();
		if (hornSelect.value === "party-horn") {
			const confetti = new JSConfetti();
			confetti.addConfetti();
		}
	});
}
