import React from 'react'

function Game() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en';
    recognition.interimResults = 'false';
    recognition.continuous = 'true';

    function startButton() {
        const textContent = document.getElementById("textContent");
        recognition.start();
        console.log("Recognition started");

    }

    function stopButton() {
        const textContent = document.getElementById("textContent");
        recognition.stop();

        console.log("Recognition stopped");
    }

    function clearButton() {
        const textContent = document.getElementById("textContent");
        textContent.innerText = '';

        console.log("cleared");
    }

    recognition.onresult = (e) => {
        console.log(e);
        const textContent = document.getElementById("textContent");
        textContent.innerText += e.results[e.results.length - 1][0].transcript;
    }

    return <>
        <div className='w-[100%] h-[100vh]'>
            <h1>Testing Speech Recognition</h1>
            
            <button id = 'start' className='p-3 border-amber-600 border-solid border-3 rounded-2xl' onClick={startButton}>Start</button>
            <button id='stop' className='p-3 border-amber-600 border-solid border-3 rounded-2xl' onClick={stopButton}>Stop</button>
            <button id='clear' className='p-3 border-amber-600 border-solid border-3 rounded-2xl' onClick={clearButton}>Clear</button>


            <div id='textContent'></div>

        </div>
{/*         
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
        </div> */}
    </>
}

export default Game