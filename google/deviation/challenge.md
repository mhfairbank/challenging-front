Given an array of integer elements and an integer d please consider all the sequences of d consecutive elements in the array. For each sequence we compute the difference between the maximum and the minimum value of the elements in that sequence and name it the deviation.
Your task is to write a function that computes the maximum value among the deviations of all the sequences considered above.

Note that your function will receive the following arguments:
* v, which is the array of integers
* d, which is an integer value giving the length of the sequences

Data constraints
* the array will contain up to 100,000 elements
* all the elements in the array are integer numbers in the following range: [1, 231 -1]
* the value of d will not exceed the length of the given array

Efficiency constraints
* your function is expected to print the result in less than 2 seconds

Example

Input
* v: 6, 9, 4, 7, 4, 1
* d: 3

Output
* 6

Explanation
The sequences of length 3 are:
6 9 4 having the deviation 5 (the minimum value in the sequence is 4 and the maximum is 9)
9 4 7 having the deviation 5 (the minimum value in the sequence is 4 and the maximum is 9)
4 7 4 having the deviation 3 (the minimum value in the sequence is 4 and the maximum is 7)
7 4 1 having the deviation 6 (the minimum value in the sequence is 1 and the maximum is 7)
The maximum value among all deviations is 6