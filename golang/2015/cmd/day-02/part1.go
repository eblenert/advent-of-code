package main

import (
	"sort"
	"strconv"
	"strings"
)

func SolvePart1(inputData []string) int {
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

		sum += 2 * (dimensions[0]*dimensions[1] + dimensions[0]*dimensions[2] + dimensions[1]*dimensions[2])
		sum += dimensions[0] * dimensions[1]

	}

	return sum
}
