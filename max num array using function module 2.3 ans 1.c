#include <stdio.h>
float maximum (float num[], int size);

int main ()

{
    int i,size;

    printf ("Enter total number of elements (1 to 100): \n");
    scanf ("%d", &size);

    float num[100];

    for (i=0; i<size; i++) {
        printf ("Enter Number %d: ",i);
        scanf ("%f", &num[i]); 
		 }

    printf("Largest Number: %f", maximum (num, size));
}

float maximum (float num[], int size)
{
    int i;
    //float num[]={size};
    float max;
    max=num[0];

    for (i=1; i<size; i++)
	 {
        if (num[i] > max)
            max=num[i]; 
	}
    return max;
}

