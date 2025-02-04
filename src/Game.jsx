import React from 'react'

function Game() {

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();

    recognition.interimResults = true;

    let p = document.createElement("p");
    recognition.addEventListener('result', (e) => {
        console.log(e.results);
    })

    recognition.start();

  return <>
  <div>

  </div>
    <div className='w-[100%] h-[100vh] py-[10%] px-[6%] bg-cyan-100 '>
        <div className='w-[100%] h-[100%] [word-spacing:20px] text-wrap text-[35px]/15 font-[600] text-black/40 flex justify-center overflow-scroll'>
        The ball is red.  It is a big red ball.
        The ball bounces.  The big red ball bounces high.
        I can catch the ball. I can catch the big red ball.
        The ball is fun. The big red ball is fun to play with.
        I like the ball. I like the big red ball.
        The ball is red.  It is a big red ball.
        The ball bounces.  The big red ball bounces high.
        I can catch the ball. I can catch the big red ball.
        The ball is fun. The big red ball is fun to play with.
        I like the ball. I like the big red ball.
        The ball is red.  It is a big red ball.
        The ball bounces.  The big red ball bounces high.
        I can catch the ball. I can catch the big red ball.
        The ball is fun. The big red ball is fun to play with.
        I like the ball. I like the big red ball.
        The ball bounces.  The big red ball bounces high.
        I can catch the ball. I can catch the big red ball.
        The ball is fun. The big red ball is fun to play with.
        I like the ball. I like the big red ball.
        The ball bounces.  The big red ball bounces high.
        I can catch the ball. I can catch the big red ball.
        The ball is fun. The big red ball is fun to play with.
        I like the ball. I like the big red ball.
        </div>
    </div>
  </>
}

export default Game