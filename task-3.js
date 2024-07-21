'use strict'

const profile = {
	username: 'Jacob',
	playTime: 300,
	changeUsername: function (newName) {
		this.username = newName
	},
	updatePlayTime: function (hours) {
		this.playTime += hours
	},
	getInfo: function () {
		return `${this.username} ma ${this.playTime} aktywnych godzin!`
	},
}

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

