#ifdef VILLESCP_H
#define VILLESCP_H

#define NOM_VILLE 40

typedef struct Vcp{
  char nom[NOM_VILLE];
  int codepos;
  struct Vcp *suc
} Villecp;
typedef struct Vcp *Liste

Liste recuperation_fichiertxt();

Liste liste_insererEnTete();

Liste liste_insererEnQueue();

#endif
