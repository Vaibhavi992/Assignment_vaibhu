#include<stdio.h>
int main()
{
	float p,n,r,SI;
	
	printf("Enter principle amount:");
	scanf("%f",&p);
	
	printf("Enter the time:");
	scanf("%f",&n);
	
	printf("Enter rate:");
	scanf("%f",&r);
	SI=p*r*n/100;
	
	printf("Simple interest=%f",SI);
	return 0;
}
