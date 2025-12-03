package main

import (
	"fmt"
	"testing"

	"github.com/eblenert/advent-of-code/golang/lib/input"
)

func TestPart1_ExampleData(t *testing.T) {
	inputData, err := input.ReadInputData(2025, 3, true)
	fmt.Println(inputData)
	if err != nil {
		panic("Error reading data: " + err.Error())
	}

	result := Part1(inputData)

	if result != 357 {
		t.Fatalf("Expected 98, got %d\n", result)
	}
}
