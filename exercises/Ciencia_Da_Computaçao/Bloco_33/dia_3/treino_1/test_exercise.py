from exercise import sum_num, subtract_num, divide_num, number_is_even_or_odd


def test_if_return_a_sum_of_numbers():
    assert sum_num(2, 8) is 10


def test_if_return_a_subtract_of_numbers():
    assert subtract_num(5, 2) == 3


def test_if_return_a_divided_number():
    assert divide_num(10, 2) == 5


def test_if_number_is_odd():
    assert number_is_even_or_odd(10) == 'numero par'


def test_if_number_is_even():
    assert number_is_even_or_odd(5) == 'numero impar'
