const{readFile , writeFile} = require('fs');

readFile('./content/first.txt','utf8', (err, result) => {
    if(err){
        console.log('there is an error');
        return ;
    }else{
        const first = result
        readFile('./content/second.txt','utf8',(err, result) =>{
            if(err){
                return ;
            }
                const second = result;
        
            writeFile('./content/result-Asyn.txt',`here is the outcome ${first},${second}`,(err,result) => {
                  if(err){
                    return;
                  }else{
                    return ;
                    console.log(result);
                  }
            });
        })
    }
})