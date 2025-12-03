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

func ReadInputData(year int, day int, example bool) ([]string, error) {
	_, file, _, _ := runtime.Caller(0)
	rootDir := filepath.Clean(filepath.Join(filepath.Dir(file), "..", "..", ".."))

	filename := "input"
	if example {
		filename = "example"
	}
	inputPath := fmt.Sprintf("%s/data/%d/day-%02d/%s", rootDir, year, day, filename)

	content, err := os.ReadFile(inputPath)

	if err != nil {
		return nil, err
	}

	return strings.Split(strings.TrimSpace(string(content)), "\n"), nil
}
