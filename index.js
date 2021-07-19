window.addEventListener("load",() => {
    registerServiceWorker();
})

async function registerServiceWorker(){
    if("serviceWorker" in navigator){
        try{
            await navigator.serviceWorker.register("sw.js?v=2",{
                scope:"."
            })
        }catch(e){
            console.log("Service worker registration failed")
        }
    }
}