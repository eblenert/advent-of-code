using day_01;

namespace day_01_test;

public class NumberExtractorTest
{
    [Fact]
    public void TestOnlyDigitsInput()
    {
        Assert.Equal(12, new NumberExtractor("12").GetNumber());
    }

    [Fact]
    public void TestExampleLine1()
    {
        Assert.Equal(21, new NumberExtractor("twone3twone").GetNumber());
    }

    [Theory]
    [InlineData("two1nine", 29)]
    [InlineData("eightwothree", 83)]
    [InlineData("abcone2threexyz", 13)]
    [InlineData("xtwone3four", 24)]
    [InlineData("4nineeightseven2", 42)]
    [InlineData("zoneight234", 14)]
    [InlineData("7pqrstsixteen", 76)]
    public void TestDigitsAndLettersInput(string input, int expected)
    {
        Assert.Equal(expected, new NumberExtractor(input).GetNumber());
    }

}