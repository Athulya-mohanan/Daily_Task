function daysCountDown(target){
    let trgt= new Date(target).getTime()
    const timer=setInterval(()=>{
        let currentTime= new Date().getTime()
        const timeDifference=trgt-currentTime
        if(timeDifference<=0){
            clearInterval(timer)
            console.log("Countdown Finished!")
            return
        }
        let days=Math.floor(timeDifference/(1000*60*60*24))
        let hours=Math.floor((timeDifference%(1000*60*60*24))/(1000*60*60))
        let mins=Math.floor((timeDifference%(1000*60*60))/(1000*60))
        let secs=Math.floor((timeDifference%(1000*60))/1000)
        console.log(`${days} days ${hours} hours ${mins} mins ${secs} seconds`)
    },1000)
}
daysCountDown("2025-10-26")