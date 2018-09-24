module.exports.logRequestInterceptor = {
    process(handlerInput) {
        console.log(`REQUEST++++${JSON.stringify(handlerInput.requestEnvelope, null, 2)}`);
    },
};

module.exports.logResponseInterceptor = {
    process(handlerInput, response) {
        console.log(`RESPONSE++++${JSON.stringify(response)}`);
    },
};

module.exports.SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

        return handlerInput.responseBuilder.getResponse();
    }
};


module.exports.randomString = (array) => {
    console.log("in randomString");
    //check that the given item is not a string, otherwise simply return the string
    var type = typeof array;
    if (type == "string") {
        log("the string literal in random phrase");
        return array;
    }

    var i = 0;
    if (array) { //array is not empty
        if (array.length) {
            i = Math.floor(Math.random() * array.length); //random i
            console.log("phrase is: " + array[i]);
            return (array[i]); //return random item from array
        }
    }
    return "";
}

module.exports.enumerateStrings = (strings) => {
    if (strings.length == 1) {
        return strings[0];
    }
    let output = "";
    for (let i = 0; i < strings.length - 2; i++) {
        output += `${strings[i]}, `;
    }
    output += `${strings[strings.length - 2]} and ${strings[strings.length - 1]}`
    return output;
}

module.exports.supportsDisplay = (handlerInput) => {
    var hasDisplay =
        handlerInput.requestEnvelope.context &&
        handlerInput.requestEnvelope.context.System &&
        handlerInput.requestEnvelope.context.System.device &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces.Display
    return hasDisplay;
}

