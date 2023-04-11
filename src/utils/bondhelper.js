export function pawCalculator(metric,metricTotal){
    const numFullPaws = Math.floor(metric/(metricTotal/5))
   
    const pawArray=[]
    for(let i=0;i<5;i++){
        if (i<numFullPaws){
            pawArray.push(true)
        } else {
            pawArray.push(false)
        }
    }
    return pawArray
}

export function mainPaws(miniMetrics){
    let numMiniPaws = 0;
    miniMetrics.forEach(metric=>{
        numMiniPaws += Math.floor(metric.value/(metric.total/5))
    })
    
    return numMiniPaws
}