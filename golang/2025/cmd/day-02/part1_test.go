package main

import (
	"fmt"
	"testing"

	lib "github.com/eblenert/advent-of-code/golang/lib/input"
)

func TestPart1ExampleData(t *testing.T) {
	exampleData, err := lib.ReadFromFile("../../../../data/2025/day-02/example")

	if err != nil {
		fmt.Println("Something went wrong" + err.Error())
	}

	result := Part1(exampleData)

	if result != 1227775554 {
		t.Fatalf("Result %d, Want %d\n", result, 1227775554)
	}
}

var rangeTests = []struct {
	in  IdRange
	out int
}{
	{IdRange{Start: 11, End: 22}, 33},
	{IdRange{Start: 95, End: 115}, 99},
	{IdRange{Start: 998, End: 1012}, 1010},
	{IdRange{Start: 1188511880, End: 1188511890}, 1188511885},
	{IdRange{Start: 222220, End: 222224}, 222222},
	{IdRange{Start: 1698522, End: 1698528}, 0},
	{IdRange{Start: 446443, End: 446449}, 446446},
	{IdRange{Start: 38593856, End: 38593862}, 38593859},
}

func TestPart1_Ranges(t *testing.T) {
	for _, idRangeTest := range rangeTests {
		result := SumOfInvalidIdsInRange(idRangeTest.in, IsIdInvalid)

		if result != idRangeTest.out {
			t.Fatalf("Result %d. Want %d\n", result, idRangeTest.out)
		}
	}
}
