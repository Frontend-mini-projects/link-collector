function createlink() {
            // create a node
            // first store the value given by form
            // Then create a li tag then create a anchor tag, In anchor tag set attribute href = 'given link' and set a text node  = 'text to display'.
            // NOw append textnode to anchor tag and anchor tag to li tag and li tag to ol tag.





            // taking value given by form
            let link = document.getElementById("exampleInputPassword1").value;
            let text = document.getElementById("exampleInputEmail1").value;


            text = (text == "") ? 'UtProjects(default)' : text;
            link = (link == "") ? 'http://utprojects.epizy.com' : link;


            console.log(`Text is : ${text} Link is : ${link}
            `);

            const li = document.createElement("li");

            const a = document.createElement("a");
            a.setAttribute("href", link);
            const textnode = document.createTextNode(text);
            a.appendChild(textnode);





            li.appendChild(a);



            document.getElementById("orderedlist").appendChild(li);
             
            // let hr = document.createElement(hr);
            // olist.appendChild(hr);



            document.getElementById("successalert").style.display = 'block';
            // data-dismiss="alert"

            setTimeout(() => {
                document.getElementById("successalert").style.display = 'none';

            }, 3000);


            document.getElementById("exampleInputPassword1").value = "";
            document.getElementById("exampleInputEmail1").value = "";

        }