package main

import (
	"fmt"
	"strconv"
)

type Move struct {
	Direction rune
	Amount    int
}

func Part1(inputData []string) int {
	moves, _ := MapToMove(inputData)

	for _, m := range moves {
		fmt.Printf("Direction: %s, Amount: %d\n", string(m.Direction), m.Amount)
	}

	dial := 50

	timePointingToZero := 0
	for _, move := range moves {
		var direction int

		if move.Direction == 'L' {
			direction = 1
		} else {
			direction = -1
		}

		oldValue := dial
		dial = dial + direction*move.Amount

		if dial == 0 {
			timePointingToZero++
		}

		if dial > 99 {
			fmt.Printf("dial value is over 99: %d. overflow: %d\n", dial, dial-99)
			dial = dial - 99
		}

		if dial < 0 {
			dial = 99 + dial
		}

		fmt.Printf("Old value: %d. Direction: %c, Amount: %d. New value: %d\n", oldValue, move.Direction, move.Amount, dial)

	}

	return timePointingToZero
}

func MapToMove(input []string) ([]Move, error) {
	out := make([]Move, 0, len(input))

	for _, v := range input {
		amount, err := strconv.Atoi(v[1:])
		if err != nil {
			return nil, err
		}
		out = append(out, Move{
			Direction: rune(v[0]),
			Amount:    amount,
		})
	}

	return out, nil
}
