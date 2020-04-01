#ifdef VILLESCP_H
#define VILLESCP_H

#define NOM_VILLE 40

typedef struct Vcp{
  char nom[NOM_VILLE];
  int codepos;
  struct Vcp *suc
} Villecp;

Liste recuperation_fichiertxt();

#endif
