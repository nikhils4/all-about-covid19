document.getElementById("preloader").style.display = "block";


function getFormattedTime(dt) {
	let arr = dt.split(" ");
	let date = arr[0].split("/")[0]
	let month = arr[0].split("/")[1]
	let year = arr[0].split("/")[2]
	let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var dateString = date + " " + monthNames[month - 1] + " " + year + ", " + arr[1]
	return dateString;
}


function resize() {
	if (window.outerWidth < 990) {
		document.getElementById('c').innerHTML = 'Conf';
		document.getElementById('a').innerHTML = 'Act';
		document.getElementById('r').innerHTML = 'Rec';
		document.getElementById('d').innerHTML = 'Death';
		document.getElementById('tc').innerHTML = 'C';
		document.getElementById('ta').innerHTML = 'A';
		document.getElementById('tr').innerHTML = 'R';
		document.getElementById('td').innerHTML = 'D';
	} else {
		document.getElementById('c').innerHTML = 'Confirmed';
		document.getElementById('a').innerHTML = 'Active';
		document.getElementById('r').innerHTML = 'Recovered';
		document.getElementById('d').innerHTML = 'Deceased';
		document.getElementById('tc').innerHTML = 'Confirmed';
		document.getElementById('ta').innerHTML = 'Active';
		document.getElementById('tr').innerHTML = 'Recovered';
		document.getElementById('td').innerHTML = 'Deceased';
	}
}

fetch('https://api.covid19india.org/data.json')
	.then(res => {
		return res.json();
	})
	.then(data => {
		document.getElementById('count-confirmed').innerHTML = data.statewise[0].confirmed
		document.getElementById('count-recovered').innerHTML = data.statewise[0].recovered
		document.getElementById('count-deceased').innerHTML = data.statewise[0].deaths
		document.getElementById('count-active').innerHTML = data.statewise[0].active
		document.getElementById('inc-confirmed').innerHTML = data.statewise[0].deltaconfirmed
		document.getElementById('inc-recovered').innerHTML = data.statewise[0].deltarecovered
		document.getElementById('inc-deceased').innerHTML = data.statewise[0].deltadeaths
		document.getElementById('update-time').innerHTML = getFormattedTime(data.statewise[0].lastupdatedtime)
		let statesArray = data.statewise;
		let content = "";
		for (let i = 1; i < statesArray.length; i = i + 1) {
			let noOfActive = statesArray[i].active;
			let noOfRecovered = statesArray[i].recovered;
			let noOfConfirmed = statesArray[i].confirmed;
			let noOfDeaths = statesArray[i].deaths;
			let deltaconfirmed = "";
			let deltadeaths = "";
			let deltarecovered = "";
			let deltacolorConfirmed = "";
			let deltacolorRecovered = "";
			let deltacolorDeaths = "";
			if (noOfActive < 100) {
				color = 'color : #28a745'
			} else if (noOfActive < 1000) {
				color = 'color : #F0CA33'
			} else {
				color = 'color : #FF073A'
			}
			if (statesArray[i].deltaconfirmed !== "0") {
				deltaconfirmed = `&#8593;${statesArray[i].deltaconfirmed}`
				deltacolorConfirmed = 'color : #FF073A'
			}
			if (statesArray[i].deltarecovered !== "0") {
				deltarecovered = `&#8593;${statesArray[i].deltarecovered}`
				deltacolorRecovered = 'color : #28a745'
			}
			if (statesArray[i].deltadeaths !== "0") {
				deltadeaths = `&#8593;${statesArray[i].deltadeaths}`
				deltacolorDeaths = 'color : #6c757d'
			}
			content = content + `<tr>
																<th style='${color}'>${statesArray[i].state}</th>
																<td>${noOfConfirmed}<sup style='${deltacolorConfirmed}'>${deltaconfirmed}</sup></td>
																<td>${noOfActive}</td>
																<td>${noOfRecovered}<sup style='${deltacolorRecovered}'>${deltarecovered}</sup></td>
																<td>${noOfDeaths}<sup style='${deltacolorDeaths}'>${deltadeaths}</sup></td>
															</tr>`
		}
		document.getElementById('table-data').innerHTML = content;
		document.getElementById("preloader").style.display = "none";
		var isChromium = window.chrome;
		var winNav = window.navigator;
		var vendorName = winNav.vendor;
		var isOpera = typeof window.opr !== "undefined";
		var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
		var isIOSChrome = winNav.userAgent.match("CriOS");
		if (isIOSChrome) {
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.id   = cssId;
			link.rel  = 'stylesheet';
			link.href = './css/voice.css';
			head.appendChild(link);
		} else if (
			isChromium !== null &&
			typeof isChromium !== "undefined" &&
			vendorName === "Google Inc." &&
			isOpera === false &&
			isIEedge === false
		) {
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.rel  = 'stylesheet';
			link.href = './css/voice.css';
			head.appendChild(link);
		} else {
			// NA
			console.log('niklo patli gali se')
		}

	})

resize();



window.addEventListener('resize', () => {
	resize();
})

var quotes = ["#StaySafe", "#StayAtHome", "#SocialDistancing", "#IndiaFightsCorona", "#SafeHands", "#TogetherAtHome", "#QuarantineAndChill",
	"#FlattenTheCurve", "#Lockdown", "#WorkingFromHome", "#ViewFromMyWindow", "#MyPandemicSurvivalPlan", "#IndiaFightsBack", "#WithMe",
	"#EverydayIsASunday", "#CoronaWarriors", "#MyGovFactCheck", "#InThisTogether", "#Let'sDoOurPart", "#JoinHands", "#StaySafe", "#StayAtHome",
	"#SocialDistancing", "#IndiaFightsCorona", "#SafeHands", "#TogetherAtHome", "#QuarantineAndChill",
	"#FlattenTheCurve", "#Lockdown", "#WorkingFromHome", "#ViewFromMyWindow", "#MyPandemicSurvivalPlan", "#IndiaFightsBack", "#WithMe",
	"#EverydayIsASunday", "#CoronaWarriors", "#MyGovFactCheck", "#InThisTogether", "#Let'sDoOurPart", "#JoinHands", "#StaySafe", "#StayAtHome",
	"#SocialDistancing", "#IndiaFightsCorona", "#SafeHands", "#TogetherAtHome", "#QuarantineAndChill",
	"#FlattenTheCurve", "#Lockdown", "#WorkingFromHome", "#ViewFromMyWindow", "#MyPandemicSurvivalPlan", "#IndiaFightsBack", "#WithMe",
	"#EverydayIsASunday", "#CoronaWarriors", "#MyGovFactCheck", "#InThisTogether", "#Let'sDoOurPart", "#JoinHands", "#StaySafe", "#StayAtHome",
	"#SocialDistancing", "#IndiaFightsCorona", "#SafeHands", "#TogetherAtHome", "#QuarantineAndChill",
	"#FlattenTheCurve", "#Lockdown", "#WorkingFromHome", "#ViewFromMyWindow", "#MyPandemicSurvivalPlan", "#IndiaFightsBack", "#WithMe",
	"#EverydayIsASunday", "#CoronaWarriors", "#MyGovFactCheck", "#InThisTogether", "#Let'sDoOurPart", "#JoinHands", "#StaySafe", "#StayAtHome", "#SocialDistancing", "#IndiaFightsCorona", "#SafeHands", "#TogetherAtHome", "#QuarantineAndChill",
	"#FlattenTheCurve", "#Lockdown", "#WorkingFromHome", "#ViewFromMyWindow", "#MyPandemicSurvivalPlan", "#IndiaFightsBack", "#WithMe",
	"#EverydayIsASunday", "#CoronaWarriors", "#MyGovFactCheck", "#InThisTogether", "#Let'sDoOurPart", "#JoinHands", "#StaySafe", "#StayAtHome",
	"#SocialDistancing", "#IndiaFightsCorona", "#SafeHands", "#TogetherAtHome", "#QuarantineAndChill",
	"#FlattenTheCurve", "#Lockdown", "#WorkingFromHome", "#ViewFromMyWindow", "#MyPandemicSurvivalPlan", "#IndiaFightsBack", "#WithMe",
	"#EverydayIsASunday", "#CoronaWarriors", "#MyGovFactCheck", "#InThisTogether", "#Let'sDoOurPart", "#JoinHands"];

for (let i = 0; i < quotes.length; i++) {
	setTimeout(function () {
		document.getElementById("hashtag").innerHTML = quotes[i];
	}, i * 4000);
}




