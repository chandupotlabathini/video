let btn=document.getElementById("btn")
console.log(btn);

btn.addEventListener("click",async ()=>{
    let search=document.getElementById("search").value 
    console.log(search);
    let data=await window.fetch(`https://pixabay.com/api/videos/?key=40806069-3c067ae78c47a2ca6cffbcdd6&q=${search}&pretty=true`)
    console.log(data);
    let res=await data.json()
    console.log(res);

    res.hits.map((data1)=>{
        console.log(data1);
        let demo=document.getElementById("demo")
        console.log(demo);
        console.log(data1.videos.medium);
        let video=` <video src=${data1.videos.medium.url} controls></video>`
        demo.innerHTML+=video
    })
})
