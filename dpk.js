const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
    let candidate;
    
    // if there is an event
    if (event) {

        // if the event has a partitionKey
        if (event.partitionKey) {

            // the candidate equals the event's paritionKey
            candidate = event.partitionKey;

            // if the event does not have a partitionKey
        } else {

            // create a variable data to convert the event into a string
            const data = JSON.stringify(event);
            
            // the candidate now equals a created hash instance that updates
            // the hash content using the update() function, to get the hash value
            // we use digest
            candidate = crypto.createHash("sha3-512").update(data).digest("hex");
        }
    }
    
    // there is a candidate value
    if (candidate) {

        // if the datatype of candidate is not a string
        if (typeof candidate !== "string") {
            // the candidate will equal a stringified version of candidate
            candidate = JSON.stringify(candidate);
        }

        const MAX_PARTITION_KEY_LENGTH = 256;

        // if the candidate's value's length is greater than the max_partition_key_length 
        if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
            // the candidate now equals a created hash instance that updates
            // the hash content using the update() function, to get the hash value
            // we use digest
            candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");;
        }

    // if there is no candidate value
    } else {
        // the candidate will equal the trivial_partition_key
        candidate = "0";
    }
    

    // return the value of the candidate
    return candidate;
};