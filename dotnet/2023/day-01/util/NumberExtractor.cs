using System.Linq;

namespace day_01;


public class NumberExtractor
{
    private readonly List<string> NumbersAsLetters;
    private readonly List<char> digits;
    private int FirstDigit;
    private int LastDigit;

    public NumberExtractor(string line)
    {
        NumbersAsLetters = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

        digits = [.. line];

        ComputeFirstDigit();
        ComputeLastDigit();
    }

    private void ComputeFirstDigit()
    {
        var s = "";
        for (var i = 0; i < digits.Count; i++)
        {
            if (char.IsDigit(digits[i]))
            {
                FirstDigit = (int)char.GetNumericValue(digits[i]);
                break;
            }
            s += digits[i];
            foreach (var number in NumbersAsLetters)
            {
                if (s.Contains(number))
                {
                    FirstDigit = NumbersAsLetters.IndexOf(number);
                    break;
                }
            }
            if (FirstDigit > 0)
            {
                break;
            }
        }
    }

    private void ComputeLastDigit()
    {
        var s = "";
        for (var i = digits.Count - 1; i >= 0; i--)
        {
            if (char.IsDigit(digits[i]))
            {
                LastDigit = (int)char.GetNumericValue(digits[i]);
                break;
            }
            s = digits[i] + s;

            foreach (var number in NumbersAsLetters)
            {
                if (s.Contains(number))
                {
                    LastDigit = NumbersAsLetters.IndexOf(number);
                }
            }

            if (LastDigit > 0)
            {
                break;
            }
        }
    }
    public int GetNumber()
    {
        return int.Parse($"{FirstDigit}{LastDigit}");
    }
}
