//without third variable swap two number
#include<stdio.h>
int main()
{
	int a,b;
	printf("Enter two values:");
	scanf("%d%d",&a,&b);
	printf("before swapping First value=%d second value=%d",a,b);
	a=a+b;
	b=a-b;
	a=a-b;
	printf("\nAfter swapping First value=%d second value=%d",a,b);
	return 0;
}
