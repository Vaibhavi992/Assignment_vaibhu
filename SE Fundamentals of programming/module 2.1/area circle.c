#include<stdio.h>
int main()
{
	float pie=3.14;
	int radius;
	printf("Enter the radius value");
	scanf("%d",&radius);
	float area=pie*radius*radius;
	printf("the area of given circle is %f",area);
	return 0;
}
