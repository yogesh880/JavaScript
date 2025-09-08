function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let suc=false;
        if(suc){
            resolve('Data fetched succesfully');
        }else{
            reject('error fetching data')
        }
        },3000)
    })
}
fetchData().then((data)=>console.log(data) )
            .catch((error)=>console.log(error))