package main

import "testing"

func TestPart2_2x3x4(t *testing.T) {
	result := SolvePart2([]string{"2x3x4"})

	if result != 34 {
		t.Fatalf("Expected 34, got %d.\n", result)
	}
}

func TestPart2_1x1x10(t *testing.T) {
	result := SolvePart2([]string{"1x1x10"})

	if result != 43 {
		t.Fatalf("Expected 43, got %d.\n", result)
	}
}
