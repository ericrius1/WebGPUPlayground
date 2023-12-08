async function main(){
    const adapter = await navigator.gpu?.requestAdapter();
    const device = await adapter?.requestDevice();
    if(!device){
        fail("WebGPU not supported")
        return;
    }
    console.log('web gpu device detected')
}



main()