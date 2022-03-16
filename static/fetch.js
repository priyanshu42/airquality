
                <script>
                  fetch("https://jsonplaceholder.typicode.com/users")
                  .then(response=> response.json())
                  //.then(result=> document.write(result));
                  .then((result) => 
                  {  
                    console.log(result);
                    for(var x in result)
                    {
                      document.write(`${result[x].name} -   ${result[x].email} - ${result[x].address.suite} <br>`);
                    }
                  })
                   .catch((error) => document.write("can't fetch data"));
                </script>
                 