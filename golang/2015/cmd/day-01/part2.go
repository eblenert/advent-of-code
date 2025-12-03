package main

import "fmt"

func SolvePart2(inputData string) int {
	floor := 0

	for i, r := range inputData {
		if r == '(' {
			floor++
		}
		if r == ')' {
			floor--
		}
		if floor == -1 {
			fmt.Println("Reached basement. Exit")
			return i + 1
		}
	}
	return 0
}
