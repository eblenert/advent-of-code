package main

import (
	"fmt"
	"time"

	input "github.com/eblenert/advent-of-code/golang/lib/input"
)

func main() {
	data, err := input.ReadInputData(2025, 3, false)

	if err != nil {
		fmt.Println("something went wrong")
		fmt.Println(err)
	}

	start := time.Now()
	fmt.Println("2025 day 02")
	result1 := Part1(data)

	result2 := Part2(data)
	elapsed := time.Since(start)

	fmt.Printf("part 1 result %d\n", result1)
	fmt.Printf("part 2 result %d. Took %s\n", result2, elapsed)

}

func Part1(inputData []string) int {
	sum := 0

	for _, batteryBank := range inputData {
		sum += GetBatteryMaxJoltage(batteryBank)
	}

	return sum
}

func Part2(inputData []string) int {
	return 0
}

func GetBatteryMaxJoltage(batteryBank string) int {
	maxJoltage := 0

	batteryBankArr := make([]int, len(batteryBank))

	for i, ch := range batteryBank {

		batteryBankArr[i] = int(ch - '0')
	}

	for i := range batteryBankArr {
		for j := i + 1; j < len(batteryBankArr); j++ {
			n := batteryBankArr[i]*10 + batteryBankArr[j]
			if maxJoltage < n {
				maxJoltage = n
			}
		}
	}
	return maxJoltage
}
