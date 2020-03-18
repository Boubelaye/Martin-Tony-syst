CC      = gcc
OBJS    = ls.o
CFLAGS  = -c -g -Wall -pedantic
LDFLAGS =
PGM     = ls

all: $(PGM)

$(PGM): $(OBJS)
	$(CC) -o $(PGM) $(OBJS) $(LDFLAGS)

.c.o:
	$(CC) $(CFLAGS) $<

clean:
	rm -f $(PGM)
	rm -f $(OBJS)
	rm -f *~
