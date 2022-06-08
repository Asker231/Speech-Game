
function User(){
    new Promise((resolve,reject)=>{
        speechSynthesis.speak(new SpeechSynthesisUtterance('Введите ваше имя в поле пожалуйста'))
        setTimeout(()=>{
            resolve()
        },1000)
    }).then(()=>{
        const nameUser = prompt('Ваше имя ?');
        if(nameUser == 'Хуй' && 'Пизда' && 'Жопа' && 'Чорт'){
        speechSynthesis.speak(new SpeechSynthesisUtterance('Попрошу Вас не выражаться, а теперь говорите что вам нужно '))
    }else{
        speechSynthesis.speak(new SpeechSynthesisUtterance('Слушаю Вас  ' + nameUser))
    }
    })
 
}
function Gets(){
        const citi = prompt('Ваш город?');
        const citiName = document.querySelector('.citiname');
        const time = document.querySelector('.time');
        const deg = document.querySelector('.deg');
        const im = document.querySelector('.im');
        const api = `http://api.weatherstack.com/current?access_key=c331d58a6741e47e32474ab6b6d53e45&query=${citi}`; 
   new Promise((resolve,reject)=>{
       fetch(api)
          .then(resl=>resl.json())
          .then((result)=>{
            citiName.innerHTML = result.location.name;
            time.innerHTML = result.current.observation_time;
            deg.innerHTML = result.current.temperature;
            im.src = result.current.weather_icons;
        
   })
        setTimeout(()=>{
            resolve()
        },2000)
  })
    }
    const micro = document.querySelector('.micro');
    function Weather(){
        const weather = document.querySelector('.weather');
                weather.style.transition = '.2s';
                weather.style.opacity = 1;        
                weather.style.height = '250px';
                weather.style.transition = '.5s';
    }
    window.SpeechRecognition=window.SpeechRecognition||webkitSpeechRecognition;
            const speech = new window.SpeechRecognition();
            speech.interimResults = false;
            speech.addEventListener('result',(e)=>{
                let word = e.results[0][0].transcript;
                if(word == 'погода'&&'Погода'){
                    //Вот это логику с проверками команд нужно вынести отдельно
                   new Promise((resolve,reject)=>{
                         Gets();
                    setTimeout(()=>{
                               resolve()
                      },1000)
              }).then(()=>{
                          Weather()  
                    })
                 }else{
                    return null;
                }
            })


        speech.addEventListener('end',()=>{
               speech.start()
               micro.classList.remove('activemicro')

        }) 

        micro.addEventListener('dblclick',()=>{
            speech.abort();

        })
     micro.addEventListener('click',()=>{
         new Promise((resolve,rej)=>{
             User() 
             setTimeout(()=>{
            resolve()
         },2000)
         }).then(()=>{
             speech.start()
          
         micro.classList.add('activemicro');
         setTimeout(()=>{
         micro.style.transition = '3s';
         micro.style.top = '20px';

         micro.style.left = '20px'
         micro.style.transition = '2s';
     },1000)
         })
        
          
    
     })
  
        