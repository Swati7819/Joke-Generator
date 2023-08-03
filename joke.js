const btn_element1 = document.getElementById('btn1');
const joke_element1 = document.getElementById('joke1');

const Api_key1 = "oMPwYPSwwUYw5aPIN8XwAA==pDF2OVOHLfiLsZVh";

const options1 = {
    method: "GET",
    headers: {
        "X-Api-key": Api_key1,
    },
};


Api_url1 = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function telljoke1() {

    joke_element1.innerText = "Updating...";
    btn_element1.disabled = true;
    btn_element1.innerText = "Loading";
    const response1 = await fetch(Api_url1, options1);
    const data1 = await response1.json();

    joke_element1.innerText = data1[0].joke;

    btn_element1.disabled = false;
    btn_element1.innerText = "Tell me a joke";
}



btn_element1.addEventListener("click", telljoke1);