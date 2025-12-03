package main

import (
	"fmt"

	input "github.com/eblenert/advent-of-code/golang/lib/input"
)

func main() {
	data, err := input.ReadFromFile("../../../../data/2025/day-01/input")
	if err != nil {
		fmt.Println("somethinf went wrong")
		fmt.Println(err)
	}
	fmt.Println("2025 day 01")
	result := Part1(data)
	fmt.Printf("part 1 result %d\n", result)

	result2 := Part2(data)
	fmt.Printf("part 2 result %d\n", result2)
}
