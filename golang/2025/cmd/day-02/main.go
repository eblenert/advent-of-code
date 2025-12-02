package main

import (
	"fmt"
	"time"

	lib "github.com/eblenert/advent-of-code/golang/lib/input"
)

func main() {
	data, err := lib.ReadFromFile("../../../../data/2025/day-02/input")

	if err != nil {
		fmt.Println("something went wrong")
		fmt.Println(err)
	}

	start := time.Now()
	fmt.Println("2025 day 02")
	result1 := Part1(data)
	fmt.Printf("part 1 result %d\n", result1)

	result2 := Part2(data)
	elapsed := time.Since(start)
	fmt.Printf("part 2 result %d. Took %s\n", result2, elapsed)

}
