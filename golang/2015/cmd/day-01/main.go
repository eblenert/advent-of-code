package main

import (
	"fmt"
	"os"

	input "github.com/eblenert/advent-of-code/golang/lib/input"
)

func main() {
	data, err := input.ReadInputData(2015, 1)

	fmt.Println(os.Getwd())

	if err != nil {
		panic("Cannot read input data. " + err.Error())
	}

	fmt.Println("Part 1: ", SolvePart1(data[0]))
	fmt.Println("Part 2: ", SolvePart2(data[0]))

}
