const printToDom = (divId, textToPrint) => {
    $(`#${divId}`).html(textToPrint);


    //old way
    // const selectedDiv = $(`#${divId}`)
    // selectedDiv.html(textToPrint);
}

export default { printToDom }
