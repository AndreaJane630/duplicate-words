function findDups() {
	
	let listitems = [];
	let unordered = document.getElementById('placeholder');
	unordered.innerHTML = ""; 
	unordered.style.display = "none";
	let locations = [];
	let wordlist = [];
	let msg = document.getElementById('msg');
	if (msg) {
		// Find the element which contains the element to be removed.
		let containerEl = document.getElementById('signUp');
		// Remove the element.
		containerEl.removeChild(msg);
	}
		
	function createOutput(wordlist) {
		
		for (i = 0; i < wordlist.length; i++) {
			listitems[i] = document.createElement('li');
			unordered.appendChild(listitems[i]);
			listitems[i].innerHTML = wordlist[i];
		}
	}
		
	let str = document.getElementById('sentence').value;
	
	if ((str.length) && (str != " ")){
		wordlist = str.split(" ");
		createOutput(wordlist);
		
		for (i=0; i < wordlist.length; i++) {
			wordlist[i] = wordlist[i].toLowerCase().replace(',',"").replace('.',"").replace('?',"");
		}
		
		for (i=0; i < wordlist.length; i++) {
			for (j=i+1; j < wordlist.length; j++) {
				
				if (wordlist[i] == wordlist[j]) {
					locations.push(i);
					locations.push(j);
					break;
				}
			}	
		}
		for (i=0; i < locations.length; i++) {
			if (!(listitems[locations[i]].hasAttribute("class"))) {
				listitems[locations[i]].setAttribute('class', 'dup');
			} 
		}
		
		unordered.style.display = "inline-block";
				
	} else {
		let feedback = document.createElement('p');
		document.getElementById('signUp').appendChild(feedback);
		feedback.setAttribute('id', 'msg');
		feedback.innerHTML = "Please enter a sentence";
	}
} // end of findDups 
	 			
let finder = document.getElementById('find');
finder.addEventListener('click', findDups);