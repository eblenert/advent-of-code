package lib

import (
	"os"
	"strings"
)

func ReadFromFile(filePath string) ([]string, error) {
	_, err := os.Stat(filePath)
	if err != nil {
		return []string{}, err
	}

	data, _ := os.ReadFile(filePath)
	return strings.Split(string(data), "\n"), nil
}
