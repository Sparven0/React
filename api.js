function getValue(){
    let inputone = document.getElementById('input');
    let inputtwo = document.getElementById('inputwo');

    axios.post('https://reqres.in/api/login',{
        email: inputone,
        password: inputtwo 
    }).then(response => {
        console.log(response)
    })
}
