from test import count_ocurrences


def test_count_ocurrences():
    count = count_ocurrences("jobs.csv", "python")
    number_times_python = 1639
    assert count == number_times_python
