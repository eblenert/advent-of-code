package main

import (
	"fmt"
	"strconv"
)

type Move struct {
	Direction rune
	Amount    int
}

func Part1(inputData []string) {
	moves, _ := Map(inputData)

	for _, m := range moves {
		fmt.Printf("Direction: %s, Amount: %d\n", string(m.Direction), m.Amount)
	}

	dial := 50

	for _, move := range moves {
		var direction int
		timePointingToZero := 0

		if move.Direction == 'L' {
			direction = -1
		} else {
			direction = 1
		}

		dial = dial + direction*move.Amount

		if dial == 0 {
			timePointingToZero++
		}

		if dial > 99 {
			dial = dial - 99
		}

		if dial < 0 {
			dial = 99 + dial
		}
	}
}

func Map(input []string) ([]Move, error) {
	out := make([]Move, 0, len(input))

	for _, v := range input {
		// fmt.Println(i, string(v[0]), v)
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
