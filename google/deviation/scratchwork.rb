def find_deviation(values, length)
  end_index = length - 1
  difference = length - 1
  max_deviation = 0
  prev_max = 0
  prev_min = 0

  while end_index < values.size do
  	if values[end_index] > prev_max || values[end_index] < prev_min
	    prev_max = values[(end_index - difference)..(end_index)].max
	    prev_min = values[(end_index - difference)..(end_index)].min
	    deviation = prev_max - prev_min
	    max_deviation = deviation if deviation > max_deviation
	  end
	  end_index += 1
  end
  puts max_deviation
end

def large_array
	a = 100000

	la = []

	while a > 0 do
		la.push(a % 359)
		a -= 1
	end
	la
end

find_deviation(large_array, 1000)