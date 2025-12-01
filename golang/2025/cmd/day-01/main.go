package main

import (
	"fmt"

	lib "github.com/eblenert/advent-of-code/golang/lib/input"
)

func main() {
	data, err := lib.ReadFromFile("../data/2025/day-01/example")
	if err != nil {
		fmt.Println("somethinf went wrong")
		fmt.Println(err)
	}
	fmt.Println("2025 day 01")
	Part1(data)
}
