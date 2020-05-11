try:
    age = int(input('Age: '))
    income = 20000
    risk = income/age
    print(risk)
    print(age)
except ValueError:
    print("Enter Proper Value")
except ZeroDivisionError:
    print("Person cannot have zero Age")