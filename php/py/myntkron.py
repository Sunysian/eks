import random

K = 'K'
M = 'M'

PENGER = [K,M]

#Returnerer en random penge
def get_toss():
    return random.choice(PENGER)

def get_rounds():
    while True:
        try: runder = int(input('Hvor mange runder vil du spille? '))
        except ValueError: print('Beklager, du må skrive inn et tall!')
        else: break
    return runder

def get_guess():
    while True:
        try:
            choice = input('Hva gjetter du? (M/K)').upper()
            if choice != 'M' and choice != 'K':
                raise ValueError            
        except ValueError: 
            print('Beklager, du må skrive M eller K')
        else: break
    return choice

def compare(coin1, coin2):
    if coin1 == coin2:
        return True
    return False

#Spiller spillet
def main():
    print('Hei og velkommen til spillet!\n')
        
    runder = get_rounds()
    for i in range(1,runder+1):
        print('Spiller runde %s' % i)
        guess = get_guess()
        toss = get_toss()  
        if compare(guess, toss):
            print('You win! Both had %s' % guess)
        else:
            print('You lose! Computer toss: %s, your guess: %s' % (toss, guess))

main()