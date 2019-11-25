# StringExercises
Made for uploading String exercises.

# The problem
Calculate the sum of similarities of a string S with each of it's suffixes.

# Solution
An **array** is created with n's values. N been the amount of test cases that suffices the corresponding constraints.
The main loop iterates throug this array, and for each string the algorithm compares the first char with the value of the string in a index wich starts at the second potiton of the input array, if the values are equals we increment the two index for each char comparation, a counter and repeat the process until the two chars don't match anymore. This proces is repeted for the string located in each position of the input array.

# Complexity
For the worst case we have a complexity of O(n^2)
An example of a worst case will be where all the letters are the same(i.e, input: aaaaaaaaaaa ).
The minor the number of suffixes that matches the original input is, the best result in time the algorithm will return.

# Futre Imporvments
Re-think the logic of the algorithm to wrok in a linear time with n inputs.
Add error handling, and checking of some trivial constraints.

# References
[YouTube] (https://www.youtube.com/watch?v=CpZh4eF8QBw)
[Google] (https://ivanyu.me/blog/2013/10/15/z-algorithm/)

