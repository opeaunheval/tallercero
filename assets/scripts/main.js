const typed = new Typed('.typed', {
    strings: [
        'Historia de la Arquitectura',
        'Teoria de la Arquitectura',
        'Expeción Gráfica',
        'Taller de Diseño'
    ],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true, // this is a default
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html', // or text
    // defaults to false for infinite loop
    loopCount: false,
    // callback that executes once all the typing is finished
    onComplete: (self) => { },
    // starting callback function before each string
    preStringTyped: (arrayPos, self) => { },
    //callback for every typed string
    onStringTyped: (arrayPos, self) => { },
    // callback for reset
    resetCallback: () => { }
});