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
		direction := 1

		if move.Direction == 'L' {
			direction = -1
		}

		oldValue := dial
		dial = dial + direction*move.Amount

		for dial > 99 {
			fmt.Printf("dial value is over 99: %d. overflow: %d\n", dial, dial-100)
			dial = dial - 100
		}

		for dial < 0 {
			fmt.Printf("dial value is under 0: %d. overflow: %d\n", dial, dial+100)
			dial = dial + 100
		}

		if dial == 0 {
			fmt.Println("dial is zero")
			timePointingToZero += 1
		}

		fmt.Printf("Old value: %d. Direction: %c, Amount: %d. New value: %d\n", oldValue, move.Direction, move.Amount, dial)

	}

	return timePointingToZero
}

func MapToMove(input []string) ([]Move, error) {
	out := make([]Move, 0, len(input))

	for _, v := range input {
		if len(v) == 0 {
			continue
		}
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
