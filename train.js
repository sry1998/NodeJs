const csv = require('csv'); 
const obj = csv(); 
let MyData = [];

obj.from.path('/home/shweta/Javascript2/isl_wise_train_detail_03082015_v1.csv').to.array(function (data) {
   
    for (let index = 1; index < 20; index++) {
        MyData.push({
            train_no: data[index][0],
            train_name: data[index][1],
            islno: data[index][2],
            st_code: data[index][3],
            st_name: data[index][4],
            arrival_time: data[index][5],
            dept_time: data[index][6],
            dist: data[index][7],
            ssc: data[index][8],
            ssn: data[index][9],
            dsc: data[index][10],
            dsn: data[index][11]

        }) ;
    }
    distance = [];
    trainnum = [];
    for(let i = 0; i < MyData.length; i++) {
        distance[i] = MyData[i].dist;
        trainnum[i] = MyData[i].train_no;
    } 
   
    function getTotalNumberOfTrain(array){
        let distinctTrainNo = [];
        // Loop through array values

        for(let value of array){
            if(distinctTrainNo.indexOf(value) === -1){

                distinctTrainNo.push(value);       
                // console.log(uniqueArray)
            
            }
        }
        return distinctTrainNo;
    }

    let total_train = getTotalNumberOfTrain(trainnum);
    console.log("Total number of trains: " + total_train.length);       

    let finaldistance = distance.map(function (x) {
        return parseInt(x, 10)
    });
    console.log('Longest Distance Is : ' + Math.max.apply(null,finaldistance))
    console.log('Smallest Distance Is : ' +  Math.min.apply(null,finaldistance))

    //Group By islno
    const groupBy = (array,key) => {
        return array.reduce((result, currentvalue) => {
            (result[currentvalue[key]] = result[currentvalue[key]] || []).push(currentvalue);
            return result;
        }, {});
    }

      const groupByislno = groupBy(MyData,'islno');
      //Group By finish
    
    const groupBystop = (array,key) => {
        return array.reduce((result, currentvalue) => {
            let cnt = 0;
            (result[currentvalue[key]] = result[currentvalue[key]] || []).push(cnt = cnt + 1);
            return result;
        }, {});
    }
        let c = 0;
      const groupBytotalstop = groupBystop(MyData,'train_name');
      console.log(groupBytotalstop);
     

      var trainStop = [];
      Object.keys(groupBytotalstop).forEach(ele => {
          trainStop.push(groupBytotalstop[ele].length);
      });
      console.log("Minimum Stops:" + Math.min.apply(null,trainStop));
      console.log("Maximum Stop:" + Math.max.apply(null,trainStop));
     // const ma = myarray(groupBytotalstop,);
      //console.log(ma);



});

