package main

import (
	"strconv"
	"strings"
)

func Part2(inputData []string) int {
	rawIdRanges := strings.Split(inputData[0], ",")

	sum := 0

	for _, v := range rawIdRanges {
		strRange := strings.Split(v, "-")
		start, _ := strconv.Atoi(strRange[0])
		end, _ := strconv.Atoi(strRange[1])

		sum += SumOfInvalidIdsInRange(IdRange{start, end}, isIdInvalid2)
	}
	return sum
}

func DoesPatternRepeatInString(pattern string, input string) bool {
	inputSize := len(input)
	patternSize := len(pattern)

	if inputSize%patternSize != 0 {
		return false
	}

	repeatTimes := len(input) / len(pattern)

	count := strings.Count(input, pattern)

	return repeatTimes == count

}

func isIdInvalid2(id int) bool {
	idString := strconv.Itoa(id)

	for i := 1; i <= len(idString)/2; i++ {
		pattern := idString[0:i]

		// fmt.Printf("%d. Searching for %s in %s. %t\n", i, pattern, idString, DoesPatternRepeatInString(pattern, idString))
		if DoesPatternRepeatInString(pattern, idString) {
			return true
		}

	}

	return false

}
