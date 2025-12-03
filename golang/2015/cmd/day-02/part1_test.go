package main

import "testing"

func TestPart1_2x3x4(t *testing.T) {
	result := SolvePart1([]string{"2x3x4"})

	if result != 58 {
		t.Fatalf("Expected 58, got %d.\n", result)
	}
}

func TestPart1_1x1x10(t *testing.T) {
	result := SolvePart1([]string{"1x1x10"})

	if result != 43 {
		t.Fatalf("Expected 43, got %d.\n", result)
	}
}
