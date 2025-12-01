package lib

import (
	"testing"
)

func TestReadFromFile(t *testing.T) {
	filePath := "../../data/2015/day-01/input"
	_, err := ReadFromFile(filePath)

	if err != nil {
		t.Fatalf("File not found")
	}
}
