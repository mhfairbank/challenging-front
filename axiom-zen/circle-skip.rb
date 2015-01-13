def circle(start)
	array = *(1..start)
	strike = false
	while array.size > 1 do
		if strike == false
			strike = !strike if array.size.odd?
			array.select!.with_index{|entry, i| entry if i.even?}
		else
			strike = !strike if array.size.odd?
			array.select!.with_index{|entry, i| entry if i.odd?}
		end
	end
	puts array[0]
end

def super_circle(start)
	array = *(1..start)
	strike = false
	while array.size > 1 do
		strike ? array.shift : array.push(array.shift)
		strike = !strike
	end
	puts array[0]
end

# uncomment these to test
# test_num = 7

# circle(test_num)
# super_circle(test_num)