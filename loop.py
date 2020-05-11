from random import randint
# random number gusseing game
guess_count = 0
guess_limit = 5
randomnumber = randint(0,10)
#print(randomnumber)


while (guess_count < guess_limit):
    input1 = int(input("Enter a number from 0 to 10"))
    guess_count = guess_count + 1;
    if(input1 == randomnumber):
        print("You entered correct number")
        break

else :
    print("You were not able to make it ")