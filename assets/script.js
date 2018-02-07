document.querySelector(".about").addEventListener("click", aboutInfo);

function aboutInfo(e){

    const output = `
                <ul>
                    <li>ID:</li>  
                    <li>Name: </li>  
                    <li>Company: </li>  
                    <li>Phone:</li>  
                </ul>
                `;
                document.querySelector(".about-content").innerHTML = output;

    e.preventDefault();
}