package input

import (
	"fmt"
	"os"
	"path/filepath"
	"runtime"
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

func ReadInputData(year int, day int) ([]string, error) {
	_, file, _, _ := runtime.Caller(0)
	rootDir := filepath.Clean(filepath.Join(filepath.Dir(file), "..", "..", ".."))
	inputPath := fmt.Sprintf("%s/data/%d/day-%02d/input", rootDir, year, day)

	content, err := os.ReadFile(inputPath)

	if err != nil {
		return nil, err
	}

	return strings.Split(strings.TrimSpace(string(content)), "\n"), nil
}
