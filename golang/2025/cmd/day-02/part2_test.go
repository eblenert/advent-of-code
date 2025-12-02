package main

import (
	"fmt"
	"testing"

	lib "github.com/eblenert/advent-of-code/golang/lib/input"
)

func TestPart2_ExampleData(t *testing.T) {
	exampleData, err := lib.ReadFromFile("../../../../data/2025/day-02/example")

	if err != nil {
		fmt.Println("Something went wrong" + err.Error())
	}

	result := Part2(exampleData)

	if result != 4174379265 {
		t.Fatalf("Result %d, Want %d\n", result, 4174379265)
	}
}

func TestPart2_DoesPatternRepeat(t *testing.T) {
	result := DoesPatternRepeatInString("1188", "1188511880")

	if result != true {
		t.Fatalf("Result %t. Want true\n", result)
	}
}
