function daysCountDown(target){
    let trgt= new Date(target).getTime()
    const timer=setInterval(()=>{
        let currentTime= new Date().getTime()
        const timeDifference=trgt-currentTime  // difference in milliseconds
        if(timeDifference<=0){
            clearInterval(timer)
            console.log("Countdown Finished!")
            return
        }
        // let days=Math.floor(timeDifference/(1000*60*60*24))
        // let hours=Math.floor((timeDifference%(1000*60*60*24))/(1000*60*60))
        // let mins=Math.floor((timeDifference%(1000*60*60))/(1000*60))
        // let secs=Math.floor((timeDifference%(1000*60))/1000)

        let totalSeconds=Math.floor(timeDifference/1000)  // cpnverted the difference in milliseconds to seconds
        const days=Math.floor(totalSeconds/86400)   // 1day=86400s
        totalSeconds%=84600

        const hours=Math.floor(totalSeconds/3600)
        totalSeconds%=3600

        const mins=Math.floor(totalSeconds/60)

        const secs=totalSeconds%60
        console.log(`${days} days ${hours} hours ${mins} mins ${secs} seconds`)
    },1000)
}
daysCountDown("2025-10-28")