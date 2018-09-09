const test = (arg) => {
    let max = arg;
    let expectAnswer = [];
    loop(arg) (() => {
        expectAnswer.push(--max);
    });

    while(true) {
        if (expectAnswer.length == 0) break;
        let randomNum = get_random(arg);
        expectAnswer = expectAnswer.filter(x => x != randomNum);
    }

    console.log("do well!");
}