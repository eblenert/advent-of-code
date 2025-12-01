package main

import (
	"fmt"
	"testing"

	lib "github.com/eblenert/advent-of-code/golang/lib/input"
)

func TestPart2ExampleData(t *testing.T) {
	exampleData, err := lib.ReadFromFile("../../../../data/2025/day-01/example")

	if err != nil {
		fmt.Println("Something went wrong" + err.Error())
		return
	}

	result := Part2(exampleData)

	if result != 3 {
		t.Fatalf("Result %d, Want %d", result, 6)
	}
}
