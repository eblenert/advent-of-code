package main

func SolvePart1(inputData string) int {
	floor := 0

	for _, r := range inputData {
		if r == '(' {
			floor++
		}
		if r == ')' {
			floor--
		}
	}
	return floor
}
