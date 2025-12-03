package main

import (
	"sort"
	"strconv"
	"strings"
)

func SolvePart2(inputData []string) int {
	sum := 0

	for _, line := range inputData {
		listVals := strings.Split(line, "x")
		var dimensions []int

		for _, nStr := range listVals {
			n, err := strconv.Atoi(nStr)
			if err != nil {
				panic("wateva")
			}
			dimensions = append(dimensions, n)
		}
		sort.Ints(dimensions)

		// wrap the present
		sum += 2 * (dimensions[0] + dimensions[1])

		// bow
		sum += dimensions[0] * dimensions[1] * dimensions[2]

	}

	return sum
}
