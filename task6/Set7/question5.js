function daysCountDown(target){
    let targt=new Date(target).getTime()
    const timer=setInterval(()=>{
        let currentTime=new Date().getTime()
        const differenceInTime=targt-currentTime

        if(differenceInTime<=0){
            clearInterval(timer)
            console.log("Count down ends")
            return
        }
        let days=Math.floor(differenceInTime /(1000*60*60*24))
        let hours=Math.floor((differenceInTime %(1000*60*60*24))/(1000*60*60))
        let mins=Math.floor((differenceInTime %(1000*60*60))/(1000*60))
        let seconds=Math.floor((differenceInTime %(1000*60))/1000)
        console.log(`${days} days ${hours} hours ${mins} mins ${seconds} secs`)

    },1000)
}
daysCountDown("2025-10-22") 