

const lista = document.querySelector('#listadoDeSucursales')
 
fetch('https://jsonplaceholder.typicode.com/comments')
    .then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${post.email}</h4>
                <p>${post.body}</p>
            `
            lista.append(li)
             })
    })

   /* const lista = document.querySelector('#listadoDeSucursales')
 
    fetch('https://api.weatherapi.com/v1/sports.json?key=a5e5c7a28af1238e54f2cedeab9c801f&q=Buenos Aires')
        .then( (resp) => resp.json() )
        .then( (data) => {
           
            data.forEach((post) => {
                const li = document.createElement('li')
                li.innerHTML = `
                    <h4>${post.email}</h4>
                    <p>${post.body}</p>
                `
                lista.append(li)
                 })
        })*/


    