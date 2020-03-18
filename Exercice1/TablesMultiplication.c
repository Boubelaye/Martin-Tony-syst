#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
#include <time.h>

int scoreObtenu;

int hasard(){
  return rand() %10;
}

void sortie(){
  printf("\nVous avez obtenu : %d\n", scoreObtenu);
  exit(0);
}

int main(){
  scoreObtenu=0;
  struct sigaction action;
  action.sa_handler = sortie;
  action.sa_flags = 0;
  sigemptyset(&action.sa_mask);
  sigaction(SIGALRM, &action, NULL);
  sigaction(SIGINT, &action, NULL);

  srand(time(NULL));

  int a;
  int b;
  int resultat;

  while (1){
      alarm(5);
      a = hasard();
      b = hasard();
      printf("%d * %d\n", a, b);
      scanf("%d", &resultat);
  }
  return 0;
}
