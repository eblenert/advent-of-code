package main

import "fmt"

func Part2(inputData []string) int {
	moves, _ := MapToMove(inputData)

	for _, m := range moves {
		fmt.Printf("Direction: %s, Amount: %d\n", string(m.Direction), m.Amount)
	}

	dial := 50

	timePointingToZero := 0
	for _, move := range moves {
		direction := 1

		if move.Direction == 'L' {
			direction = -1
		}

		for range move.Amount {
			dial += direction

			if dial == 100 {
				dial = 0
			}

			if dial == -1 {
				dial = 99
			}

			if dial == 0 {
				timePointingToZero++
			}
		}

		fmt.Printf("New value: %d. Counter: %d \n", dial, timePointingToZero)

	}

	return timePointingToZero
}
