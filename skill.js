function getUserInput(message) {
    return new Promise((resolve, reject) => {
        try {
            const userInput = window.prompt(message);
            if (userInput === null) {
                // If the user clicks "Cancel," resolve with null
                resolve(null);
            } else {
                // If the user enters a value, resolve with the input
                resolve(userInput);
            }
        } catch (error) {
            // If any error occurs, reject the Promise
            reject(error);
        }
    });
}

// Example usage:
getUserInput("Enter something:")
    .then((result) => {
        if (result === null) {
            console.log("User canceled the input.");
        } else {
            console.log("User entered:", result);
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
