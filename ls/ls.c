#include <stdio.h>
#include <dirent.h>

int main (int c, char *v[]) {
    struct dirent *pDirent;
    DIR *pDir;

    if (c < 2){
        printf ("Usage: programme <dirname>\n");
        return 1;
    }

    pDir = opendir (v[1]);

    if (pDir == NULL){
        printf ("Répertoire impossible à ouvrir '%s'\n", v[1]);
        return 1;
    }

    while ((pDirent = readdir(pDir)) != NULL){
        printf ("%ld - %s\n",pDirent->d_ino, pDirent->d_name);
    }

    closedir (pDir);
    return 0;
}
