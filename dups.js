function findDups() {
	
	let listitems = []; // array to hold each <li> to be displayed after sentence has been processed
	let unordered = document.getElementById('placeholder');
	unordered.innerHTML = ""; 
	unordered.style.display = "none";
	let locations = []; //the locs of the dups, i.e. their index in the wordlist array
	let wordlist = []; // the words that are extracted from the sentence
	let msg = document.getElementById('msg');
	if (msg) {
		// Find the element which is the parent of the msg
		
		let containerEl = document.getElementById('signUp');
		// Remove the message.
		containerEl.removeChild(msg);
	}
	// function that is called below after sentence is split into words - its purpose is to 
	//save the words as <li> elements so that the sentence can be reconstructed 
	//it gets the wordlist array as input before it has been tampered with, 
	//so all commas, periods, and question marks are preserved.
	
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
				
	} else { // if you're here, then no sentence entered or empty - append a message to the form element
		let feedback = document.createElement('p');
		document.getElementById('signUp').appendChild(feedback);
		feedback.setAttribute('id', 'msg');
		feedback.innerHTML = "Please enter a sentence";
	}
} // end of findDups 
	 			
let finder = document.getElementById('find');
finder.addEventListener('click', findDups);