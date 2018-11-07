// async function
const fetchAsync = async url => {
  console.log("firing");
  // await response of fetch call
  let response = await fetch(url);
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
};

export default fetchAsync;
