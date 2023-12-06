using day_01;
Console.WriteLine("Reading from STDIN");
List<string> puzzleInput = [];
string? line;


while (!string.IsNullOrEmpty(line = Console.ReadLine()))
{
    puzzleInput.Add(line);
}

Console.WriteLine(puzzleInput.Select(l => new NumberExtractor(l).GetNumber()).Sum());