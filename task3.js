let turn='X';
    let gameStatus={
      x:[],
      o:[]
    };
    function checkWinning(gameStatus){
      let winningCriteria=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
      winningCriteria.forEach(Element =>{
        let winning=0;
        for(let i=0;i<3;i++){
          gameStatus.x.forEach(number =>{
            if(Element[i]===number){
              winning++;
            }
          })
        }
        
        if(winning===3){
          document.querySelector('.js-result').innerHTML='X wins';
          return;
        }
      })


      //o wins?
      winningCriteria.forEach(Element =>{
        let winning=0;
        for(let i=0;i<3;i++){
          gameStatus.o.forEach(number =>{
            if(Element[i]===number){
              winning++;
            }
          })
        }
        
        if(winning===3){
          document.querySelector('.js-result').innerHTML='O wins';
          return;
        }
      })

    }

    function clearScore(){
      document.querySelectorAll('.js-box').forEach(Element=>{
        Element.innerHTML='';
        gameStatus={
          x:[],
          o:[]
        };
      });
      document.querySelector('.result').innerHTML='............';
    }


    document.querySelectorAll('.js-box').forEach(Element => {
      Element.addEventListener('click', ()=>{
        Element.innerHTML=`<p>${turn}</p>`;
        if(turn==='X'){
          gameStatus.x.push(Number(Element.dataset.number));
          turn='O';
        }
        else{
          gameStatus.o.push(Number(Element.dataset.number));
          turn='X';
        }
        checkWinning(gameStatus);
      })
    })
    
    document.querySelector('.js-reset-button').addEventListener('click',()=> {
      clearScore();
    });