// import users from './users'

const corsProxyUrl = 'https://cors.bridged.cc'

export const commaNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(/[^0-9^,^\.]+/g, '');

export const shortNum = donuts => {
  let val = NaN;
  if (donuts > 0) donuts = Math.floor(donuts)
  if (donuts < 100000) val = commaNumber(donuts);
  else if (donuts < 1000000) val = Math.floor(donuts/1000) + 'K';
  else val = Math.floor(donuts/100000)/10 + 'M';
  return Number.isNaN(val) ? '0' : val;
}

export async function fetchCors(url=''){
  const response = await fetch(`${corsProxyUrl}/${url}`)
  return response.json()
}

export async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function getUser({username, address}){
  const res = await fetch("https://ethtrader.github.io/donut.distribution/users.json")
  const users = await res.json()
  if(username)
    return users.find(u=>u.username.toLowerCase()===username.toLowerCase())
  else if(address)
    return users.find(u=>u.address.toLowerCase()===address.toLowerCase())
  else
    return null
}

export async function isRedditUsername(username){
  const { error } = await fetchCors(`https://old.reddit.com/user/${username}/about.json`)
  if(error) return false
  return true
}

export function onlyPaste(evt){
  // Note this could be a bit of overkill but I found some
	// problems in Firefox and decided to go the distance
	// including old windows keyboard short cut keys.
	// Enumerate all supported clipboard, undo and redo keys
	const clipboardKeys = {
		winInsert : 45,
		winDelete : 46,
		SelectAll : 97,
		macCopy : 99,
		macPaste : 118,
		macCut : 120,
		redo : 121,
		undo : 122
	}
	// Simulate readonly but allow all clipboard, undo and redo action keys
	const charCode = evt.which;
	//alert(charCode);
	// Accept ctrl+v, ctrl+c, ctrl+z, ctrl+insert, shift+insert, shift+del and ctrl+a
	if (
		evt.ctrlKey && charCode == clipboardKeys.redo ||		/* ctrl+y redo			*/
		evt.ctrlKey && charCode == clipboardKeys.undo ||		/* ctrl+z undo			*/
		evt.ctrlKey && charCode == clipboardKeys.macCut ||		/* ctrl+x mac cut		*/
		evt.ctrlKey && charCode == clipboardKeys.macPaste ||		/* ctrl+v mac paste		*/
		evt.ctrlKey && charCode == clipboardKeys.macCopy ||		/* ctrl+c mac copy		*/
		evt.shiftKey && evt.keyCode == clipboardKeys.winInsert ||	/* shift+ins windows paste	*/
		evt.shiftKey && evt.keyCode == clipboardKeys.winDelete ||	/* shift+del windows cut	*/
		evt.ctrlKey && evt.keyCode == clipboardKeys.winInsert  ||	/* ctrl+ins windows copy	*/
		evt.ctrlKey && charCode == clipboardKeys.SelectAll		/* ctrl+a select all		*/
		){ return 0; }
	// Shun all remaining keys simulating readonly textbox
	const theEvent = evt || window.event;
	let key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	const regex = /[]|\./;
	if(!regex.test(key)) {
		theEvent.returnValue = false;
		theEvent.preventDefault();
	}
}


export async function useXDai(library, setIsSending){
  setIsSending(true)
  try {
    let reponse = await library.jsonRpcFetchFunc("wallet_addEthereumChain", [{
      chainId: "0x64", // A 0x-prefixed hexadecimal string
      chainName: "xDai",
      nativeCurrency: {
        name: "xDai",
        symbol: "xDai", // 2-6 characters long
        decimals: 18,
      },
      rpcUrls: ["https://rpc.xdaichain.com/"],
      blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
      // iconUrls: string[]; // Currently ignored.
    }])
  } catch(e){

  }
  setIsSending(false)
}
