function fetchUser(){
    return new Promise((resolve,reject)=>{
              setTimeout(()=>{
                    resolve({name:'yogesh',url:'www.google.com'});
              },2000);
    })
}
async function PostData() {
    try {
        console.log('Fetching post data..');
        let PostData = await fetchUser();
        console.log(PostData);
    } catch (error) {
       console.log(error);        
    }  
}
PostData();

// Promise all or parallel execuation
async function parallel() {
  const [a, b] = await Promise.all([fetchUser(),fetchUser()]);
  console.log(a, b);
}
parallel();
