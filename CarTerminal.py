command = ""
has_started = False;
has_stopped = True ;
while command.lower() != "quit":
    command = input(">").lower()
    if command == "start":
        print("Your car has Started")
        has_started = True ;
        has_stopped = False;
    elif has_started and command == "stop":
        print("Your car has been turned off ")
        has_started = False;
        has_stopped = True;
    elif  has_stopped and command == "stop":
        print("Already Stopped")
    elif command == "help":
        print("Enter Start to start the car\n"
              "Enter Stop to stop the car\n"
              "You can only stop the car when started before")
    elif command == "quit" :
        print("Your console has exited the function ")

    else:
        print("I am not able to understand that ")