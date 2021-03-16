import users from './users'

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

export function getUser({username, address}){
  if(username)
    return users.find(u=>u.username.toLowerCase()===username.toLowerCase())
  else if(address)
    return users.find(u=>u.address.toLowerCase()===address.toLowerCase())
  else
    return null
}
