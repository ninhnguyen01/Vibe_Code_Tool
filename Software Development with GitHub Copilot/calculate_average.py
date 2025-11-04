# ai code
def calculate_average(numbers):
    """
    Calculate the average of a list of numbers.

    Parameters:
        numbers (list): A list of numerical values.

    Returns:
        float: The average of the numbers in the list. Returns 0 if the list is empty.
    """
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

# human code
print(calculate_average([1, 2, 3, 4, 5]))