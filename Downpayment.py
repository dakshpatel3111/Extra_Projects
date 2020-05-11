price = 1000000

cs = input("What is your credit score?")
if int(cs) > 500:
    has_good_credit = True
else :
    has_good_credit = False
# here the console will check the cs of the uSer and will asign him downpayment
if has_good_credit:
    downpayment = price * 10 /100

else :
    downpayment = price * 20/100

print(f"The Downpayment will be ${downpayment}")