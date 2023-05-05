import time

num = 10000000

start = time.time()

for i in range(num):
    x = 1 + 1
fin = time.time()

timedelta = fin - start

print(f"Finished running {num} iterations, took {timedelta} seconds.")
input("Press any key to exit")