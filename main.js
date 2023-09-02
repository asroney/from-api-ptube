const handleCategory = async() =>{
    const response = await fetch ("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab " >${category.category}</a>
        `;
    tabContainer.appendChild(div);
    });
   
}

const handleLoadNews = async (categoryId) => {
    // console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";





    data.data?.forEach((news)=>{
        // console.log(news)
        const div = document.createElement('div');
        div.innerHTML= `
        <div class="card bg-base-100 shadow-xl">
            <figure>
            <img src= ${news?.thumbnail}" class = "h-40 w-full"/>
            </figure>
            <p class=" bg-gray-700 text-white text-right">  ${news?.others?.posted_date} sec ago</p>
            <div class="card-body">
                <div class=" flex justify-start items-center">
                    <img src=${news?.authors[0]?.profile_picture} class="w-10 h-10 rounded-full">
                    <div>
                        <h3 class="font-xl font-medium ">${news?.title}</h3>
                    </div>
                </div>
                <div class=" flex justify-start">
                    <h3> ${news?.authors[0]?.profile_name}</h3>
                    <div>
                        <img src="./image/fi_10629607.svg" ${news?.authors[0]?.verified}> 
                    </div>
                </div>
                <p>Views: ${news?.others?.views}</p>

              
            </div>
          </div>
        
        `
        cardContainer.appendChild(div)

    })
};








handleCategory()
handleLoadNews("1000")