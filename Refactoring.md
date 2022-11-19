# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
With the time I was allotted I refactored the given function deterministicPartitionKey
by removing the variable trivial_partition_key because it was only used in one
place in the function and was never redelcared so I hard-coded the value in line 50.
I added notes for each statement in the function to provide clarity on what each
step is doing. I also moved the if (candidate.length > MAX_PARTITION_KEY_LENGTH)
statement into the if (candidate) statement, it made sense that the length 
statement should only be executed if candidate is truthy. I also slid the 
MAX_PARTITION_KEY_LENGTH variable to go with the statement it belongs to since
the variable was not used elsewhere. I believe if I was given more context as to
why this function was created and what purpose I may have been able to provide
more refactoring. I would really appreciate some feedback on where I could improve.
Thank you so much for this opportunity!