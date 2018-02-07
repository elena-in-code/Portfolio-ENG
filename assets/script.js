document.querySelector(".about").addEventListener("click", aboutInfo);

function aboutInfo(e){

    const output = `
                <ul>
                    <li>Something here</li>  
                    <li>Something here </li>  
                    <li>Something here</li>  
                    <li>Something here</li>  
                </ul>
                `;
                document.querySelector(".about-content").innerHTML = output;

    e.preventDefault();
}