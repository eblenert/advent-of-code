package main

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

type IdRange struct {
	Start int
	End   int
}

type validator func(int) bool

func Part1(inputData []string) int {
	rawIdRanges := strings.Split(inputData[0], ",")

	sum := 0

	for _, v := range rawIdRanges {
		strRange := strings.Split(v, "-")
		start, _ := strconv.Atoi(strRange[0])
		end, _ := strconv.Atoi(strRange[1])

		sum += SumOfInvalidIdsInRange(IdRange{start, end}, IsIdInvalid)
	}
	return sum
}

func SumOfInvalidIdsInRange(inputRange IdRange, fn validator) int {
	sum := 0
	for i := inputRange.Start; i <= inputRange.End; i++ {
		if fn(i) {
			sum += i
		}
	}

	return sum
}

func IsIdInvalid(id int) bool {
	idString := fmt.Sprint(id)
	denominator := math.Pow10(len(idString) / 2)
	firstHalf := id / int(denominator)
	secondHalf := id % int(denominator)

	return firstHalf == secondHalf
}
